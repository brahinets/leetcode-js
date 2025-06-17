import {matrixOfZeros} from "../../common/array-factories"

export {countGoodArrays}

const MOD: number = 10 ** 9 + 7

function countGoodArrays(n: number, m: number, k: number): number {
    const dp: number[][] = matrixOfZeros(n, k + 1)
    dp[0][0] = m

    for (let i: number = 1; i < n; i++) {
        for (let equal: number = 0; equal <= k; equal++) {
            dp[i][equal] = (dp[i][equal] + dp[i - 1][equal] * (m - 1)) % MOD

            if (equal > 0) {
                dp[i][equal] = (dp[i][equal] + dp[i - 1][equal - 1]) % MOD
            }
        }
    }

    return dp[n - 1][k]
}
