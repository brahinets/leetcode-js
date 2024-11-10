import {arrayOf} from "../../common/array-factories"

export {paintWalls}

function paintWalls(cost: number[], time: number[]): number {
    const dp: number[] = arrayOf(Number.POSITIVE_INFINITY, cost.length + 1)
    dp[0] = 0

    for (let i: number = 0; i < cost.length; i++) {
        for (let j: number = cost.length; j >= 1; j--) {
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i])
        }
    }

    return dp[cost.length]
}
