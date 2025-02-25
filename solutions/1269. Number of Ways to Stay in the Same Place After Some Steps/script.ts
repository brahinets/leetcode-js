import {matrixOfZeros} from "../../common/array-factories"

export {numWays}

const MOD: number = 1e9 + 7

function numWays(steps: number, arrLen: number): number {
    const maxColumn: number = Math.min(steps, arrLen)
    const dp: number[][] = matrixOfZeros(steps + 1, maxColumn)
    dp[0][0] = 1

    for (let i: number = 1; i <= steps; i++) {
        for (let j: number = 0; j < maxColumn; j++) {
            dp[i][j] = dp[i - 1][j]

            if (j > 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD
            }

            if (j < maxColumn - 1) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MOD
            }
        }
    }

    return dp[steps][0]
}
