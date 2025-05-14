import {arrayOfZeros, matrixOfZeros} from '../../common/array-factories'

export {lengthAfterTransformations}

const MOD: number = 1e9 + 7
const ALPHABET_LENGTH: number = 26

function lengthAfterTransformations(inputString: string, steps: number, transformations: number[]): number {
    const initialFrequencies: number[] = calculateInitialFrequencies(inputString)

    if (steps <= 10_000) {
        return simulateTransformations(initialFrequencies, steps, transformations)
    }

    return calculateUsingMatrixExponentiation(initialFrequencies, steps, transformations)
}

function calculateInitialFrequencies(inputString: string): number[] {
    const frequencies: number[] = arrayOfZeros(ALPHABET_LENGTH)

    for (let index: number = 0; index < inputString.length; index++) {
        const charCode: number = inputString.charCodeAt(index) - 97
        frequencies[charCode]++
    }

    return frequencies
}

function simulateTransformations(initialFrequencies: number[], steps: number, transformations: number[]): number {
    let currentFrequencies: number[] = [...initialFrequencies]
    let nextFrequencies: number[] = arrayOfZeros(ALPHABET_LENGTH)

    for (let step: number = 0; step < steps; step++) {
        nextFrequencies.fill(0)

        for (let letterIndex: number = 0; letterIndex < ALPHABET_LENGTH; letterIndex++) {
            const count: number = currentFrequencies[letterIndex]

            if (count !== 0) {
                const reachSpan: number = transformations[letterIndex]

                for (let offset: number = 1; offset <= reachSpan; offset++) {
                    const targetIndex: number = (letterIndex + offset) % ALPHABET_LENGTH
                    nextFrequencies[targetIndex] = (nextFrequencies[targetIndex] + count) % MOD
                }
            }
        }

        currentFrequencies = [...nextFrequencies]
    }

    return currentFrequencies.reduce((total: number, frequency: number): number => (total + frequency) % MOD, 0)
}

function calculateUsingMatrixExponentiation(initialFrequencies: number[], steps: number, transformations: number[]): number {
    const MODULO_BIGINT: bigint = BigInt(MOD)
    const baseMatrix: bigint[][] = constructBaseMatrix(transformations)

    let transitionMatrix: bigint[][] = baseMatrix.map((row: bigint[]): bigint[] => [...row])
    let frequencyVector: bigint[] = initialFrequencies.map((count: number): bigint => BigInt(count))

    const intermediateMatrix: bigint[][] = matrixOfZeros(ALPHABET_LENGTH, ALPHABET_LENGTH)
        .map((row: number[]): bigint[] => row.map((): bigint => 0n))
    const intermediateVector: bigint[] = arrayOfZeros(ALPHABET_LENGTH).map((): bigint => 0n)

    let exponent: bigint = BigInt(steps)
    while (exponent > 0n) {
        if (exponent & 1n) {
            frequencyVector = multiplyMatrixByVector(transitionMatrix, frequencyVector, intermediateVector, MODULO_BIGINT)
        }

        transitionMatrix = squareMatrix(transitionMatrix, intermediateMatrix, MODULO_BIGINT)
        exponent >>= 1n
    }

    return Number(frequencyVector.reduce((sum: bigint, value: bigint): bigint => sum + value, 0n) % MODULO_BIGINT)
}

function constructBaseMatrix(transformations: number[]): bigint[][] {
    const baseMatrix: bigint[][] = matrixOfZeros(ALPHABET_LENGTH, ALPHABET_LENGTH)
        .map((row: number[]): bigint[] => row.map((): bigint => 0n))

    for (let source: number = 0; source < ALPHABET_LENGTH; source++) {
        for (let offset: number = 1; offset <= transformations[source]; offset++) {
            const target: number = (source + offset) % ALPHABET_LENGTH

            baseMatrix[target][source] += 1n
        }
    }

    return baseMatrix
}

function multiplyMatrixByVector(
    matrix: bigint[][],
    vector: bigint[],
    result: bigint[],
    modulo: bigint
): bigint[] {
    for (let row: number = 0; row < ALPHABET_LENGTH; row++) {
        let accumulator: bigint = 0n

        for (let col: number = 0; col < ALPHABET_LENGTH; col++) {
            accumulator += matrix[row][col] * vector[col]
        }
        result[row] = accumulator % modulo
    }

    return [...result]
}

function squareMatrix(matrix: bigint[][], result: bigint[][], modulo: bigint): bigint[][] {
    for (let row: number = 0; row < ALPHABET_LENGTH; row++) {
        for (let col: number = 0; col < ALPHABET_LENGTH; col++) {
            let accumulator: bigint = 0n

            for (let mid: number = 0; mid < ALPHABET_LENGTH; mid++) {
                accumulator += matrix[row][mid] * matrix[mid][col]
            }

            result[row][col] = accumulator % modulo
        }
    }

    return result.map(row => [...row])
}
