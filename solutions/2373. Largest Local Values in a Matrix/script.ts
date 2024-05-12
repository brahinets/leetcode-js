export {largestLocal}

function largestLocal(grid: number[][]): number[][] {
    const result: number[][] = []

    for (let i: number = 1; i < grid.length - 1; i++) {
        const row: number[] = []

        for (let j: number = 1; j < grid[i].length - 1; j++) {
            row.push(max(grid, i - 1, i + 1, j - 1, j + 1))
        }

        result.push(row)
    }

    return result
}

function max(grid: number[][], rowStart: number, rowEnd: number, colStart: number, colEnd: number): number {
    let max: number = Number.MIN_SAFE_INTEGER

    for (let i: number = rowStart; i <= rowEnd; i++) {
        for (let j: number = colStart; j <= colEnd; j++) {
            if (grid[i][j] > max) {
                max = grid[i][j]
            }
        }
    }

    return max
}
