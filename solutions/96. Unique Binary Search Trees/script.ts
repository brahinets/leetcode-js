import {arrayOfZeros} from "../../common/array-factories"

export {numTrees}

function numTrees(n: number): number {
    const dp: number[] = arrayOfZeros(n + 1)
    dp[0] = 1
    dp[1] = 1

    for (let i: number = 2; i <= n; i++) {
        for (let j: number = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }

    return dp[n]
}
