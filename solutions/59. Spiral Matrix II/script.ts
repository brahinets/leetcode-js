import {matrixOfZeros} from '../../common/array-factories'

export {generateMatrix}

function generateMatrix(n: number): number[][] {
    const result: number[][] = matrixOfZeros(n, n)

    let layer: number = 0
    let startNumber: number = 1
    while (startNumber <= n * n) {
        startNumber = fillMatrixBorder(result, layer, startNumber)
        layer++
    }

    return result
}

function fillMatrixBorder(matrix: number[][], layer: number, startNumber: number): number {
    for (let col: number = layer; col + layer < matrix[0].length; col++) {
        matrix[layer][col] = startNumber++
    }

    for (let row: number = 1 + layer; row + layer < matrix.length; row++) {
        matrix[row][matrix[0].length - 1 - layer] = startNumber++
    }

    for (let col: number = matrix[0].length - 2 - layer; col - layer >= 0; col--) {
        matrix[matrix.length - 1 - layer][col] = startNumber++
    }

    for (let row: number = matrix.length - 2 - layer; row - layer > 0; row--) {
        matrix[row][layer] = startNumber++
    }

    return startNumber
}
