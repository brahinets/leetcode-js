import {sum} from "../../common/array-utils"

export {chalkReplacer}

function chalkReplacer(chalk: number[], k: number): number {
    const steps: number = sum(chalk)
    k %= steps

    let student: number = 0
    while (k >= chalk[student]) {
        k -= chalk[student]
        student++
    }

    return student
}
