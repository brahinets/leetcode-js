import {arrayOfZeros} from "../../common/array-factories"

export {minTime}

function minTime(skill: number[], mana: number[]): number {
    const times: number[] = arrayOfZeros(skill.length)

    for (const manaPortion of mana) {
        let curTime: number = 0

        for (let i: number = 0; i < skill.length; i++) {
            curTime = Math.max(curTime, times[i]) + skill[i] * manaPortion
        }

        times[skill.length - 1] = curTime

        for (let i: number = skill.length - 2; i >= 0; i--) {
            times[i] = times[i + 1] - skill[i + 1] * manaPortion
        }
    }

    return times[skill.length - 1]
}
