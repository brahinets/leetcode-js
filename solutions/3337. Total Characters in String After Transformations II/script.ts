import {arrayOfZeros, matrixOfZeros} from '../../common/array-factories'

export {lengthAfterTransformations}

const MOD: number = 1e9 + 7
const ALPHABET_LENGTH: number = 26

function lengthAfterTransformations(inputString: string, steps: number, transformations: number[]): number {
    const initialFrequencies: number[] = arrayOfZeros(ALPHABET_LENGTH)
    for (const character of inputString) {
        initialFrequencies[character.charCodeAt(0) - 97]++
    }

    const transitionMatrix: number[][] = matrixOfZeros(ALPHABET_LENGTH, ALPHABET_LENGTH)

    for (let fromIndex: number = 0; fromIndex < ALPHABET_LENGTH; fromIndex++) {
        for (let offset: number = 1; offset <= transformations[fromIndex]; offset++) {
            const toIndex: number = (fromIndex + offset) % ALPHABET_LENGTH
            transitionMatrix[toIndex][fromIndex] = (transitionMatrix[toIndex][fromIndex] + 1) % MOD
        }
    }

    const poweredMatrix: number[][] = raiseMatrixToPower(transitionMatrix, steps)

    let totalLength: number = 0
    for (let row: number = 0; row < ALPHABET_LENGTH; row++) {
        let rowSum: number = 0

        for (let col: number = 0; col < ALPHABET_LENGTH; col++) {
            rowSum = (rowSum + poweredMatrix[row][col] * initialFrequencies[col]) % MOD
        }

        totalLength = (totalLength + rowSum) % MOD
    }

    return totalLength
}

function multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
    const result: number[][] = matrixOfZeros(ALPHABET_LENGTH, ALPHABET_LENGTH)

    for (let row: number = 0; row < ALPHABET_LENGTH; row++) {
        for (let k: number = 0; k < ALPHABET_LENGTH; k++) {
            if (matrixA[row][k] === 0) {
                continue
            }

            for (let col: number = 0; col < ALPHABET_LENGTH; col++) {
                result[row][col] = (result[row][col] + matrixA[row][k] * matrixB[k][col]) % MOD
            }
        }
    }

    return result
}

function raiseMatrixToPower(matrix: number[][], power: number): number[][] {
    let result: number[][] = matrixOfZeros(ALPHABET_LENGTH, ALPHABET_LENGTH)
    for (let i: number = 0; i < ALPHABET_LENGTH; i++) {
        result[i][i] = 1
    }

    while (power > 0) {
        if (power % 2 === 1) {
            result = multiplyMatrices(result, matrix)
        }

        matrix = multiplyMatrices(matrix, matrix)
        power = Math.floor(power / 2)
    }

    return result
}
