import {matrixOfZeros} from "../../common/array-factories"

export {numberOfWays}

const MOD: number = 10 ** 9 + 7

function numberOfWays(n: number, x: number): number {
    const dp: number[][] = matrixOfZeros(n + 1, n + 1)
    dp[0][0] = 1

    for (let i: number = 1; i <= n; i++) {
        const val: number = Math.pow(i, x)

        for (let j: number = 0; j <= n; j++) {
            dp[i][j] = dp[i - 1][j]

            if (j >= val) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - val]) % MOD
            }
        }
    }

    return dp[n][n]
}
