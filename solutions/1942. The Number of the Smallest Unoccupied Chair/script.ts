import {arrayOfZeros} from "../../common/array-factories"

export {smallestChair}

function smallestChair(times: number[][], targetFriend: number): number {
    const targetTime: number[] = times[targetFriend]
    times.sort(([firstStart,]: number[], [secondStart,]: number[]): number => firstStart - secondStart)

    const chairTime: number[] = arrayOfZeros(times.length)

    for (const time of times) {
        for (let i: number = 0; i < times.length; i++) {
            if (chairTime[i] <= time[0]) {
                chairTime[i] = time[1]

                if (time[0] === targetTime[0] && time[1] === targetTime[1]) {
                    return i
                }

                break
            }
        }
    }

    return 0
}
