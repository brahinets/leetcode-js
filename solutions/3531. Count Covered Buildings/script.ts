import {arrayOf} from "../../common/array-factories"

export function countCoveredBuildings(n: number, buildings: number[][]): number {
    const maxRow: number[] = arrayOf(n + 1, 0)
    const minRow: number[] = arrayOf(n + 1, n + 1)
    const maxCol: number[] = arrayOf(n + 1, 0)
    const minCol: number[] = arrayOf(n + 1, n + 1)

    for (const [x, y] of buildings) {
        maxRow[y] = Math.max(maxRow[y], x)
        minRow[y] = Math.min(minRow[y], x)
        maxCol[x] = Math.max(maxCol[x], y)
        minCol[x] = Math.min(minCol[x], y)
    }

    let coveredCount: number = 0
    for (const [x, y] of buildings) {
        const isCoveredRow: boolean = x > minRow[y] && x < maxRow[y]
        const isCoveredCol: boolean = y > minCol[x] && y < maxCol[x]
        if (isCoveredRow && isCoveredCol) {
            coveredCount++
        }
    }

    return coveredCount
}
