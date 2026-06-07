import {arrayOf} from "../../common/array-factories"
import {sum} from "../../common/array-utils"

export {missingRolls}

function missingRolls(rolls: number[], mean: number, n: number): number[] {
    const totalMean: number = mean * (n + rolls.length)

    const sumRolls: number = sum(rolls)
    const sumMissing: number = totalMean - sumRolls
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
