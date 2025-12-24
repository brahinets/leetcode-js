import {sum} from "../../common/array-utils"

export {minimumSum}

function minimumSum(grid: number[][]): number {
    const m: number = grid.length
    const n: number = grid[0].length
    let minArea: number = Infinity

    minArea = Math.min(minArea, tryHorizontalBands(grid, m, n))
    minArea = Math.min(minArea, tryVerticalBands(grid, m, n))
    minArea = Math.min(minArea, tryTopBottomSplit(grid, m, n))
    minArea = Math.min(minArea, tryBottomTopSplit(grid, m, n))
    minArea = Math.min(minArea, tryLeftRightSplit(grid, m, n))
    minArea = Math.min(minArea, tryRightLeftSplit(grid, m, n))

    return minArea === Infinity ? 0 : minArea
}

function tryHorizontalBands(grid: number[][], m: number, n: number): number {
    let minArea: number = Infinity

    for (let r1: number = 0; r1 < m - 2; r1++) {
        for (let r2: number = r1 + 1; r2 < m - 1; r2++) {
            const areas: number[] = [
                getBoundingRect(0, 0, r1, n - 1, grid),
                getBoundingRect(r1 + 1, 0, r2, n - 1, grid),
                getBoundingRect(r2 + 1, 0, m - 1, n - 1, grid)
            ]

            minArea = Math.min(minArea, calculateMinAreaIfValid(areas))
        }
    }

    return minArea
}

function tryVerticalBands(grid: number[][], m: number, n: number): number {
    let minArea: number = Infinity

    for (let c1: number = 0; c1 < n - 2; c1++) {
        for (let c2: number = c1 + 1; c2 < n - 1; c2++) {
            const areas: number[] = [
                getBoundingRect(0, 0, m - 1, c1, grid),
                getBoundingRect(0, c1 + 1, m - 1, c2, grid),
                getBoundingRect(0, c2 + 1, m - 1, n - 1, grid)
            ]

            minArea = Math.min(minArea, calculateMinAreaIfValid(areas))
        }
    }

    return minArea
}

function tryTopBottomSplit(grid: number[][], m: number, n: number): number {
    let minArea: number = Infinity

    for (let r: number = 0; r < m - 1; r++) {
        for (let c: number = 0; c < n - 1; c++) {
            const areas: number[] = [
                getBoundingRect(0, 0, r, n - 1, grid),
                getBoundingRect(r + 1, 0, m - 1, c, grid),
                getBoundingRect(r + 1, c + 1, m - 1, n - 1, grid)
            ]

            minArea = Math.min(minArea, calculateMinAreaIfValid(areas))
        }
    }

    return minArea
}

function tryBottomTopSplit(grid: number[][], m: number, n: number): number {
    let minArea: number = Infinity

    for (let r: number = 1; r < m; r++) {
        for (let c: number = 0; c < n - 1; c++) {
            const areas: number[] = [
                getBoundingRect(0, 0, r - 1, c, grid),
                getBoundingRect(0, c + 1, r - 1, n - 1, grid),
                getBoundingRect(r, 0, m - 1, n - 1, grid)
            ]

            minArea = Math.min(minArea, calculateMinAreaIfValid(areas))
        }
    }

    return minArea
}

function tryLeftRightSplit(grid: number[][], m: number, n: number): number {
    let minArea: number = Infinity

    for (let c: number = 0; c < n - 1; c++) {
        for (let r: number = 0; r < m - 1; r++) {
            const areas: number[] = [
                getBoundingRect(0, 0, m - 1, c, grid),
                getBoundingRect(0, c + 1, r, n - 1, grid),
                getBoundingRect(r + 1, c + 1, m - 1, n - 1, grid)
            ]

            minArea = Math.min(minArea, calculateMinAreaIfValid(areas))
        }
    }

    return minArea
}

function tryRightLeftSplit(grid: number[][], m: number, n: number): number {
    let minArea: number = Infinity

    for (let c: number = 1; c < n; c++) {
        for (let r: number = 0; r < m - 1; r++) {
            const areas: number[] = [
                getBoundingRect(0, 0, r, c - 1, grid),
                getBoundingRect(r + 1, 0, m - 1, c - 1, grid),
                getBoundingRect(0, c, m - 1, n - 1, grid)
            ]

            minArea = Math.min(minArea, calculateMinAreaIfValid(areas))
        }
    }

    return minArea
}

function calculateMinAreaIfValid(areas: number[]): number {
    const allValid: boolean = areas.every((area: number): boolean => area > 0)

    return allValid ? sum(areas) : Infinity
}

function getBoundingRect(r1: number, c1: number, r2: number, c2: number, grid: number[][]): number {
    let minRow: number = r2
    let maxRow: number = r1 - 1
    let minCol: number = c2
    let maxCol: number = c1 - 1
    let hasOne: boolean = false

    for (let i: number = r1; i <= r2; i++) {
        for (let j: number = c1; j <= c2; j++) {
            if (grid[i][j] === 1) {
                hasOne = true
                minRow = Math.min(minRow, i)
                maxRow = Math.max(maxRow, i)
                minCol = Math.min(minCol, j)
                maxCol = Math.max(maxCol, j)
            }
        }
    }

    return hasOne ? (maxRow - minRow + 1) * (maxCol - minCol + 1) : 0
}
