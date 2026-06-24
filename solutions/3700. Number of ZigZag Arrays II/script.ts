import {matrixOfZeros, arrayOfZeros} from '../../common/array-factories'

export {zigZagArrays}

const MODULO: number = 1_000_000_007
const SPLIT_FACTOR: number = 32768

function zigZagArrays(n: number, l: number, r: number): number {
    const rangeSize: number = r - l + 1
    const power: number = n - 2
    const halfPower: number = Math.floor(power / 2)
    const isOddPower: boolean = power % 2 === 1
    const stepMatrix: number[][] = buildStepMatrix(rangeSize)
    const poweredMatrix: number[][] = raiseMatrixToPower(stepMatrix, halfPower, rangeSize)
    const upCounts: number[] = applyMatrixToLinearVector(poweredMatrix, rangeSize)

    if (isOddPower) {
        return computeWeightedTotal(upCounts, rangeSize)
    }

    return computeTotal(upCounts)
}

function buildStepMatrix(rangeSize: number): number[][] {
    const matrix: number[][] = matrixOfZeros(rangeSize, rangeSize)

    for (let row: number = 0; row < rangeSize; row++) {
        for (let col: number = 0; col < rangeSize; col++) {
            matrix[row][col] = Math.min(row, col)
        }
    }

    return matrix
}

function applyMatrixToLinearVector(matrix: number[][], rangeSize: number): number[] {
    const result: number[] = arrayOfZeros(rangeSize)

    for (let i: number = 0; i < rangeSize; i++) {
        for (let j: number = 0; j < rangeSize; j++) {
            result[i] = (result[i] + matrix[i][j] * j) % MODULO
        }
    }

    return result
}

function computeTotal(counts: number[]): number {
    let total: number = 0

    for (let index: number = 0; index < counts.length; index++) {
        total = (total + counts[index]) % MODULO
    }

    return total * 2 % MODULO
}

function computeWeightedTotal(counts: number[], rangeSize: number): number {
    let total: number = 0

    for (let index: number = 0; index < rangeSize; index++) {
        total = (total + index * counts[index]) % MODULO
    }

    return total * 2 % MODULO
}

function modularMultiply(a: number, b: number): number {
    const bHigh: number = Math.floor(b / SPLIT_FACTOR)
    const bLow: number = b % SPLIT_FACTOR

    return (a * bLow + ((a * bHigh) % MODULO) * SPLIT_FACTOR) % MODULO
}

function raiseMatrixToPower(matrix: number[][], power: number, size: number): number[][] {
    let result: number[][] = buildIdentityMatrix(size)
    let base: number[][] = matrix
    let remainingPower: number = power

    while (remainingPower > 0) {
        if (remainingPower % 2 === 1) {
            result = multiplyMatrices(result, base, size)
        }

        base = multiplyMatrices(base, base, size)
        remainingPower = Math.floor(remainingPower / 2)
    }

    return result
}

function buildIdentityMatrix(size: number): number[][] {
    const matrix: number[][] = matrixOfZeros(size, size)

    for (let index: number = 0; index < size; index++) {
        matrix[index][index] = 1
    }

    return matrix
}

function multiplyMatrices(matrixA: number[][], matrixB: number[][], size: number): number[][] {
    const result: number[][] = matrixOfZeros(size, size)

    for (let i: number = 0; i < size; i++) {
        for (let k: number = 0; k < size; k++) {
            if (matrixA[i][k] === 0) {
                continue
            }

            for (let j: number = 0; j < size; j++) {
                result[i][j] = (result[i][j] + modularMultiply(matrixA[i][k], matrixB[k][j])) % MODULO
            }
        }
    }

    return result
}
