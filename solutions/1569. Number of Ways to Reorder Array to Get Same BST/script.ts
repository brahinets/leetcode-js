import { arrayOf } from '../../common/array-factories'

export { numOfWays }

const MODULO: number = 1_000_000_007
const BIGINT_MODULO: bigint = BigInt(MODULO)

function numOfWays(nums: number[]): number {
    const binomialTable: number[][] = buildBinomialTable(nums.length)

    return (countWays(nums, binomialTable) - 1 + MODULO) % MODULO
}

function countWays(values: number[], binomialTable: number[][]): number {
    const size: number = values.length

    if (size <= 2) {
        return 1
    }

    const rootValue: number = values[0]
    const leftValues: number[] = []
    const rightValues: number[] = []

    for (let index: number = 1; index < size; index++) {
        if (values[index] < rootValue) {
            leftValues.push(values[index])
        } else {
            rightValues.push(values[index])
        }
    }

    const interleaveWays: bigint = BigInt(binomialTable[size - 1][leftValues.length])
    const leftWays: bigint = BigInt(countWays(leftValues, binomialTable))
    const rightWays: bigint = BigInt(countWays(rightValues, binomialTable))

    return Number(interleaveWays * leftWays * rightWays % BIGINT_MODULO)
}

function buildBinomialTable(maxSize: number): number[][] {
    const table: number[][] = []

    for (let row: number = 0; row < maxSize; row++) {
        const currentRow: number[] = arrayOf<number>(1, row + 1)

        for (let column: number = 1; column < row; column++) {
            currentRow[column] = (table[row - 1][column - 1] + table[row - 1][column]) % MODULO
        }

        table.push(currentRow)
    }

    return table
}
