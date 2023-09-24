export {spiralOrder}

function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = []
    let layer: number = 0

    while (layer < Math.min(matrix.length, matrix[0].length)) {
        result.push(...matrixBorder(matrix, layer))
        layer++
    }

    return result
}

function matrixBorder(matrix: number[][], layer: number): number[] {
    const result: number[] = []

    if (matrix.length > layer * 2) {
        for (let col: number = layer; col + layer < matrix[0].length; col++) {
            result.push(matrix[layer][col])
        }
    }

    if (matrix[0].length > 2 * layer) {
        for (let row: number = 1 + layer; row + layer < matrix.length; row++) {
            result.push(matrix[row][matrix[0].length - 1 - layer])
        }
    }

    if (matrix.length > layer * 2 + 1) {
        for (let col: number = matrix[0].length - 2 - layer; col - layer >= 0; col--) {
            result.push(matrix[matrix.length - 1 - layer][col])
        }
    }

    if (matrix[0].length > layer * 2 + 1) {
        for (let row: number = matrix.length - 2 - layer; row - layer > 0; row--) {
            result.push(matrix[row][layer])
        }
    }

    return result
}
