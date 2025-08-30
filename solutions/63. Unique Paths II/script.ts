import {matrixOfZeros} from "../../common/array-factories"

export {uniquePathsWithObstacles}

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) {
        return 0
    }

    const dp: number[][] = matrixOfZeros(obstacleGrid.length, obstacleGrid[0].length)
    dp[0][0] = 1

    for (let i: number = 0; i < obstacleGrid.length; i++) {
        for (let j: number = 0; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
                continue
            }

            if (i > 0) {
                dp[i][j] += dp[i - 1][j]
            }

            if (j > 0) {
                dp[i][j] += dp[i][j - 1]
            }
        }
    }

    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
}
