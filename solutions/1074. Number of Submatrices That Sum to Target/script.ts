import {matrixOfZeros} from "../../common/array-factories"

export {numSubmatrixSumTarget}

function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    const prefixSums: number[][] = calculatePrefixSums(matrix)

    let result: number = 0
    for (let row1: number = 1; row1 < prefixSums.length; row1++) {
        for (let row2: number = row1; row2 < prefixSums.length; row2++) {
            const prefixSumFrequencies: Map<number, number> = new Map()
            prefixSumFrequencies.set(0, 1)

            for (let col: number = 1; col < prefixSums[0].length; col++) {
                const sum: number = prefixSums[row2][col] - prefixSums[row1 - 1][col]

                if (prefixSumFrequencies.has(sum - target)) {
                    result += prefixSumFrequencies.get(sum - target)!
                }

                prefixSumFrequencies.set(sum, (prefixSumFrequencies.get(sum) || 0) + 1)
            }
        }
    }

    return result
}

function calculatePrefixSums(matrix: number[][]): number[][] {
    const rows: number = matrix.length
    const cols: number = matrix[0].length

    const sums: number[][] = matrixOfZeros(rows + 1, cols + 1)
    for (let r: number = 1; r <= rows; r++) {
        for (let c: number = 1; c <= cols; c++) {
            sums[r][c] = matrix[r - 1][c - 1] + sums[r - 1][c] + sums[r][c - 1] - sums[r - 1][c - 1]
        }
    }

    return sums
}
