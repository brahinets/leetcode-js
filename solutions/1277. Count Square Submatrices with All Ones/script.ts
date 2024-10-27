import {matrixOfZeros} from "../../common/array-factories"

export {countSquares}

function countSquares(matrix: number[][]): number {
    const dp: number[][] = matrixOfZeros(matrix.length, matrix[0].length)
    let count: number = 0

    for (let row: number = 0; row < matrix.length; row++) {
        for (let col: number = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                dp[row][col] = 1 + Math.min(
                    dp[row - 1]?.[col] || 0,
                    dp[row][col - 1] || 0,
                    dp[row - 1]?.[col - 1] || 0
                )

                count += dp[row][col]
            }
        }
    }

    return count
}
