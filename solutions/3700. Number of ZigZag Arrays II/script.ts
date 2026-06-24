import {matrixOfZeros, arrayOfZeros} from '../../common/array-factories'

export {zigZagArrays}

const MODULO: number = 1_000_000_007
const SPLIT_FACTOR: number = 32768

function zigZagArrays(n: number, l: number, r: number): number {
    const rangeSize: number = r - l + 1
    const stateCount: number = rangeSize * 2
    const initialVector: number[] = buildInitialVector(rangeSize)
    const transitionMatrix: number[][] = buildTransitionMatrix(rangeSize)
    const poweredMatrix: number[][] = raiseMatrixToPower(transitionMatrix, n - 2, stateCount)
    const resultVector: number[] = multiplyMatrixByVector(poweredMatrix, initialVector, stateCount)

    return sumVector(resultVector)
}

function buildInitialVector(rangeSize: number): number[] {
    const stateCount: number = rangeSize * 2
    const vector: number[] = arrayOfZeros(stateCount)

    for (let valueIndex: number = 0; valueIndex < rangeSize; valueIndex++) {
        vector[valueIndex * 2] = valueIndex
        vector[valueIndex * 2 + 1] = rangeSize - 1 - valueIndex
    }

    return vector
}

function buildTransitionMatrix(rangeSize: number): number[][] {
    const stateCount: number = rangeSize * 2
    const matrix: number[][] = matrixOfZeros(stateCount, stateCount)

    for (let fromValue: number = 0; fromValue < rangeSize; fromValue++) {
        for (let toValue: number = 0; toValue < fromValue; toValue++) {
            matrix[toValue * 2 + 1][fromValue * 2] = 1
        }

        for (let toValue: number = fromValue + 1; toValue < rangeSize; toValue++) {
            matrix[toValue * 2][fromValue * 2 + 1] = 1
        }
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

function multiplyMatrixByVector(matrix: number[][], vector: number[], size: number): number[] {
    const result: number[] = arrayOfZeros(size)

    for (let i: number = 0; i < size; i++) {
        for (let j: number = 0; j < size; j++) {
            result[i] = (result[i] + modularMultiply(matrix[i][j], vector[j])) % MODULO
        }
    }

    return result
}

function sumVector(vector: number[]): number {
    let total: number = 0

    for (let index: number = 0; index < vector.length; index++) {
        total = (total + vector[index]) % MODULO
    }

    return total
}
