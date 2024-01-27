import {matrixOfZeros} from "../../common/array-factories"

export {kInversePairs}

const mod: number = 1e9 + 7

function kInversePairs(n: number, k: number): number {
    const dp: number[][] = matrixOfZeros(n + 1, k + 1)
    dp[1][0] = 1

    for (let size: number = 1; size <= n; size++) {
        for (let pairs: number = 0; pairs <= k; pairs++) {
            const maxAllowedPairs: number = Math.min(pairs, size - 1)

            for (let newValues: number = 0; newValues <= maxAllowedPairs; newValues++) {
                dp[size][pairs] += dp[size - 1][pairs - newValues]
                dp[size][pairs] %= mod
            }
        }
    }

    return dp[n][k]
}
