import {matrixOf} from "../../common/array-factories"
import {sum} from "../../common/array-utils"

export {tallestBillboard}

function tallestBillboard(rods: number[]): number {
    const maxDiff: number = sum(rods)
    return solve(0, rods, 0, matrixOf(-1, rods.length, maxDiff + 1)) / 2
}

function solve(i: number, rods: number[], diff: number, memo: number[][]): number {
    if (i === rods.length) {
        return diff === 0 ? 0 : Number.NEGATIVE_INFINITY
    }

    if (memo[i][diff] !== -1) {
        return memo[i][diff]
    }

    const left: number = solve(i + 1, rods, diff + rods[i], memo)
    const right: number = solve(i + 1, rods, Math.abs(diff - rods[i]), memo)
    const same: number = solve(i + 1, rods, diff, memo)

    return memo[i][diff] = Math.max(rods[i] + left, rods[i] + right, same)
}
