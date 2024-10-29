import {arrayOf} from "../../common/array-factories"

export {maxMoves}

function maxMoves(grid: number[][]): number {
    const dp: number[][] = arrayOf([0, 0], grid.length)

    for (let i: number = 0; i < grid.length; i++) {
        dp[i][0] = 1
    }

    let maxMoves: number = 0
    for (let j: number = 1; j < grid[0].length; j++) {
        for (let i: number = 0; i < grid.length; i++) {
            if (grid[i][j] > grid[i][j - 1] && dp[i][0] > 0) {
                dp[i][1] = Math.max(dp[i][1], dp[i][0] + 1)
            }

            if (i - 1 >= 0 && grid[i][j] > grid[i - 1][j - 1] && dp[i - 1][0] > 0) {
                dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + 1)
            }

            if (i + 1 < grid.length && grid[i][j] > grid[i + 1][j - 1] && dp[i + 1][0] > 0) {
                dp[i][1] = Math.max(dp[i][1], dp[i + 1][0] + 1)
            }

            maxMoves = Math.max(maxMoves, dp[i][1] - 1)
        }

        for (let k: number = 0; k < grid.length; k++) {
            dp[k][0] = dp[k][1]
            dp[k][1] = 0
        }
    }

    return maxMoves
}
