import {matrixOf} from "../../common/array-factories"

export { maxPathScore }

function maxPathScore(grid: number[][], k: number): number {
    const rows = grid.length
    const columns = grid[0]!.length
    const UNREACHABLE = -1

    let previousRow = matrixOf<number>(UNREACHABLE, columns, k + 1)
    previousRow[0]![0] = 0

    for (let col = 1; col < columns; col++) {
        const value = grid[0]![col]!
        const cellCost = value > 0 ? 1 : 0

        for (let cost = cellCost; cost <= k; cost++) {
            const previousScore = previousRow[col - 1]![cost - cellCost]!

            if (previousScore >= 0) {
                previousRow[col]![cost] = previousScore + value
            }
        }
    }

    for (let row = 1; row < rows; row++) {
        const currentRow = matrixOf<number>(UNREACHABLE, columns, k + 1)

        for (let col = 0; col < columns; col++) {
            const value = grid[row]![col]!
            const cellCost = value > 0 ? 1 : 0

            for (let cost = cellCost; cost <= k; cost++) {
                const fromAbove = previousRow[col]![cost - cellCost]!
                const fromLeft = col > 0 ? currentRow[col - 1]![cost - cellCost]! : UNREACHABLE
                const best = Math.max(fromAbove, fromLeft)

                if (best >= 0) {
                    currentRow[col]![cost] = best + value
                }
            }
        }

        previousRow = currentRow
    }

    let maxScore = UNREACHABLE

    for (let cost = 0; cost <= k; cost++) {
        const score = previousRow[columns - 1]![cost]!

        if (score > maxScore) {
            maxScore = score
        }
    }

    return maxScore
}
