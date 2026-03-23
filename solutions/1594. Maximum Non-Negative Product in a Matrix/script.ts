import { matrixOfZeros } from "../../common/array-factories"

export { maxProductPath }

const MODULO: number = 1_000_000_007

function maxProductPath(grid: number[][]): number {
    const rows: number = grid.length
    const columns: number = grid[0].length

    const maxProduct: number[][] = matrixOfZeros(rows, columns)
    const minProduct: number[][] = matrixOfZeros(rows, columns)

    maxProduct[0][0] = grid[0][0]
    minProduct[0][0] = grid[0][0]

    for (let column: number = 1; column < columns; column++) {
        maxProduct[0][column] = maxProduct[0][column - 1] * grid[0][column]
        minProduct[0][column] = minProduct[0][column - 1] * grid[0][column]
    }

    for (let row: number = 1; row < rows; row++) {
        maxProduct[row][0] = maxProduct[row - 1][0] * grid[row][0]
        minProduct[row][0] = minProduct[row - 1][0] * grid[row][0]
    }

    for (let row: number = 1; row < rows; row++) {
        for (let column: number = 1; column < columns; column++) {
            const fromTop: number[] = [
                maxProduct[row - 1][column] * grid[row][column],
                minProduct[row - 1][column] * grid[row][column],
            ]
            const fromLeft: number[] = [
                maxProduct[row][column - 1] * grid[row][column],
                minProduct[row][column - 1] * grid[row][column],
            ]
            const candidates: number[] = [...fromTop, ...fromLeft]
            maxProduct[row][column] = Math.max(...candidates)
            minProduct[row][column] = Math.min(...candidates)
        }
    }

    const result: number = maxProduct[rows - 1][columns - 1]

    if (result < 0) {
        return -1
    }

    return result % MODULO
}
