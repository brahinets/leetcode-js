import {matrixOf} from "../../common/array-factories"

export {minFallingPathSum}

function minFallingPathSum(matrix: number[][]): number {
    const n: number = matrix.length
    const dp: number[][] = matrixOf(Infinity, n, n)
    for (let j: number = 0; j < n; j++) {
        dp[0][j] = matrix[0][j]
    }

    for (let row: number = 1; row < n; row++) {
        for (let col: number = 0; col < n; col++) {
            let minPreviousRow: number = Infinity

            for (let k: number = 0; k < n; k++) {
                if (k !== col) {
                    minPreviousRow = Math.min(minPreviousRow, dp[row - 1][k])
                }


                dp[row][col] = matrix[row][col] + minPreviousRow
            }
        }
    }

    return Math.min(...dp[n - 1])
}
