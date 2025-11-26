import {arrayOf, matrixOfZeros} from "../../common/array-factories"

export {numberOfPaths}

const MOD: number = 10 ** 9 + 7

function numberOfPaths(grid: number[][], k: number): number {
    const dp: number[][][] = arrayOf(matrixOfZeros(grid[0].length, k), grid.length)
    dp[0][0][grid[0][0] % k] = 1

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            for (let r: number = 0; r < k; r++) {
                if (i > 0) {
                    const prevR: number = (r - grid[i][j] % k + k) % k
                    dp[i][j][r] = (dp[i][j][r] + dp[i - 1][j][prevR]) % MOD
                }

                if (j > 0) {
                    const prevR: number = (r - grid[i][j] % k + k) % k
                    dp[i][j][r] = (dp[i][j][r] + dp[i][j - 1][prevR]) % MOD
                }
            }
        }
    }

    return dp[grid.length - 1][grid[0].length - 1][0]
}
