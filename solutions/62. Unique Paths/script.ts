import {matrixOfZeros} from "../../common/array-factories"

export {uniquePaths}

function uniquePaths(m: number, n: number): number {
    const matrix: number[][] = matrixOfZeros(m, n)

    matrix[0][0] = 1

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (i > 0) {
                matrix[i][j] += matrix[i - 1][j]
            }
            if (j > 0) {
                matrix[i][j] += matrix[i][j - 1]
            }
        }
    }

    return matrix[m - 1][n - 1]
}
