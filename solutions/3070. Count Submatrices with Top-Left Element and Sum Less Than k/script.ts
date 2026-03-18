import { matrixOfZeros } from "../../common/array-factories"

export { countSubmatrices }

function countSubmatrices(grid: number[][], k: number): number {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const prefixSum: number[][] = matrixOfZeros(rows, columns)
    let count: number = 0

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            prefixSum[row][column] = grid[row][column]

            if (row > 0) {
                prefixSum[row][column] += prefixSum[row - 1][column]
            }

            if (column > 0) {
                prefixSum[row][column] += prefixSum[row][column - 1]
            }

            if (row > 0 && column > 0) {
                prefixSum[row][column] -= prefixSum[row - 1][column - 1]
            }

            if (prefixSum[row][column] <= k) {
                count++
            }
        }
    }

    return count
}
