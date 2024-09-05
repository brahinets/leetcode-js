import {arrayOf} from "../../common/array-factories"

export {missingRolls}

function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const sum: number = mean * (n + rolls.length)

    const sumRolls: number = rolls.reduce((total: number, roll: number): number => total + roll, 0)
    const sumMissing: number = sum - sumRolls
    if (sumMissing < n || sumMissing > 6 * n) {
        return []
    }

    const average: number = Math.floor(sumMissing / n)
    const remaining: number = sumMissing % n

    const result: number[] = arrayOf(average, n)
    for (let i: number = 0; i < remaining; i++) {
        result[i]++
    }

    return result
}
