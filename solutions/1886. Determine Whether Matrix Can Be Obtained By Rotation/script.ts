import { matrixOfZeros } from "../../common/array-factories"

export { findRotation }

function rotate90Clockwise(matrix: number[][]): number[][] {
    const size: number = matrix.length
    const rotated: number[][] = matrixOfZeros(size, size)

    for (let row: number = 0; row < size; row++) {
        for (let column: number = 0; column < size; column++) {
            rotated[column][size - 1 - row] = matrix[row][column]
        }
    }

    return rotated
}

function matricesEqual(first: number[][], second: number[][]): boolean {
    const size: number = first.length

    for (let row: number = 0; row < size; row++) {
        for (let column: number = 0; column < size; column++) {
            if (first[row][column] !== second[row][column]) {
                return false
            }
        }
    }

    return true
}

function findRotation(mat: number[][], target: number[][]): boolean {
    let current: number[][] = mat

    for (let rotation: number = 0; rotation < 4; rotation++) {
        if (matricesEqual(current, target)) {
            return true
        }
        current = rotate90Clockwise(current)
    }

    return false
}
