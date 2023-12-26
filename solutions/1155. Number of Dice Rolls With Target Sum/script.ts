import {matrixOf} from "../../common/array-factories";

export {numRollsToTarget}

const MOD: number = 10 ** 9 + 7

function numRollsToTarget(n: number, k: number, target: number): number {
    const memo: number[][] = matrixOf(-1, n + 1, target + 1)

    return countWays(n, k, target, memo)
}

function countWays(n: number, k: number, target: number, memo: number[][]): number {
    if (n === 0 && target === 0) {
        return 1
    }

    if (n === 0 || target === 0) {
        return 0
    }

    if (memo[n][target] !== -1) {
        return memo[n][target]
    }

    let ways: number = 0
    for (let i: number = 1; i <= k; i++) {
        if (target - i >= 0) {
            ways += countWays(n - 1, k, target - i, memo)
            ways %= MOD
        }
    }

    memo[n][target] = ways
    return ways
}
