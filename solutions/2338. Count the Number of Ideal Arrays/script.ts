import {matrixOfZeros} from "../../common/array-factories"

export {idealArrays}

const mod: number = 1e9 + 7

function idealArrays(n: number, maxValue: number): number {
    const combinations: number[][] = buildCombinations(n)

    const divisibleSequences: number[][] = buildDivisibleSequences(n, maxValue)

    return calculateTotal(divisibleSequences, combinations, n)
}

function buildCombinations(n: number): number[][] {
    const combinations: number[][] = matrixOfZeros(n + 1, n + 1)

    for (let i: number = 0; i <= n; i++) {
        combinations[i][0] = 1

        for (let j: number = 1; j <= i; j++) {
            combinations[i][j] = (combinations[i - 1][j] + combinations[i - 1][j - 1]) % mod
        }
    }

    return combinations
}

function buildDivisibleSequences(n: number, maxValue: number): number[][] {
    const sequences: number[][] = matrixOfZeros(maxValue + 1, n + 1)

    for (let value: number = 1; value <= maxValue; value++) {
        sequences[value][1] = 1
    }

    for (let length: number = 2; length <= n; length++) {
        for (let previous: number = 1; previous <= maxValue; previous++) {
            const count: number = sequences[previous][length - 1]

            if (count === 0) {
                continue
            }

            for (let multiple: number = previous * 2; multiple <= maxValue; multiple += previous) {
                sequences[multiple][length] = (sequences[multiple][length] + count) % mod
            }
        }
    }

    return sequences
}

function calculateTotal(sequences: number[][], combinations: number[][], n: number): number {
    let total: number = 0

    for (let value: number = 1; value < sequences.length; value++) {
        for (let length: number = 1; length <= n; length++) {
            const count: number = sequences[value][length]

            if (count === 0) {
                continue
            }

            const waysToPlace: number = combinations[n - 1][length - 1]

            total = (total + count * waysToPlace) % mod
        }
    }

    return total
}
