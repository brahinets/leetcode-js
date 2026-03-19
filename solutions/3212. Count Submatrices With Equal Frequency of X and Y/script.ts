import { matrixOfZeros } from "../../common/array-factories"

export { numberOfSubmatrices }

function numberOfSubmatrices(grid: string[][]): number {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const prefixX: number[][] = matrixOfZeros(rows, columns)
    const prefixY: number[][] = matrixOfZeros(rows, columns)
    let count: number = 0

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            prefixX[row][column] = grid[row][column] === 'X' ? 1 : 0
            prefixY[row][column] = grid[row][column] === 'Y' ? 1 : 0

            if (row > 0) {
                prefixX[row][column] += prefixX[row - 1][column]
                prefixY[row][column] += prefixY[row - 1][column]
            }

            if (column > 0) {
                prefixX[row][column] += prefixX[row][column - 1]
                prefixY[row][column] += prefixY[row][column - 1]
            }

            if (row > 0 && column > 0) {
                prefixX[row][column] -= prefixX[row - 1][column - 1]
                prefixY[row][column] -= prefixY[row - 1][column - 1]
            }

            if (prefixX[row][column] > 0 && prefixX[row][column] === prefixY[row][column]) {
                count++
            }
        }
    }

    return count
}
