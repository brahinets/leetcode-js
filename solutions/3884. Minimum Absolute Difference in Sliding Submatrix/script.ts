import { matrixOfZeros } from "../../common/array-factories"

export { minAbsDiff }

function minAbsDiff(grid: number[][], k: number): number[][] {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const resultRows: number = rows - k + 1
    const resultColumns: number = columns - k + 1
    const answer: number[][] = matrixOfZeros(resultRows, resultColumns)

    for (let row: number = 0; row < resultRows; row++) {
        for (let column: number = 0; column < resultColumns; column++) {
            answer[row][column] = computeMinDiffInSubmatrix(grid, row, column, k)
        }
    }

    return answer
}

function computeMinDiffInSubmatrix(grid: number[][], startRow: number, startColumn: number, size: number): number {
    const values: Set<number> = new Set()

    for (let row: number = startRow; row < startRow + size; row++) {
        for (let column: number = startColumn; column < startColumn + size; column++) {
            values.add(grid[row][column])
        }
    }

    const sorted: number[] = Array.from(values).sort((first: number, second: number): number => first - second)

    if (sorted.length < 2) {
        return 0
    }

    return findMinConsecutiveDiff(sorted)
}

function findMinConsecutiveDiff(sorted: number[]): number {
    let minimumDifference: number = Infinity

    for (let index: number = 1; index < sorted.length; index++) {
        minimumDifference = Math.min(minimumDifference, sorted[index] - sorted[index - 1])
    }

    return minimumDifference
}
