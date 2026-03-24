import { matrixOfZeros } from "../../common/array-factories"

export { constructProductMatrix }

const MODULO: number = 12345

function constructProductMatrix(grid: number[][]): number[][] {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const total: number = rows * columns

    const result: number[][] = matrixOfZeros(rows, columns)

    let suffix: number = 1

    for (let index: number = total - 1; index >= 0; index--) {
        const row: number = Math.floor(index / columns)

        const column: number = index % columns

        result[row][column] = suffix

        suffix = (suffix * (grid[row][column] % MODULO)) % MODULO
    }

    let prefix: number = 1
    for (let index: number = 0; index < total; index++) {
        const row: number = Math.floor(index / columns)
        const column: number = index % columns

        result[row][column] = (result[row][column] * prefix) % MODULO

        prefix = (prefix * (grid[row][column] % MODULO)) % MODULO
    }

    return result
}
