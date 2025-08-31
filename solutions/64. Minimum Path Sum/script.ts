export {minPathSum}

function minPathSum(grid: number[][]): number {
    const rowCount: number = grid.length
    const colCount: number = grid[0].length

    for (let i: number = 0; i < rowCount; i++) {
        for (let j: number = 0; j < colCount; j++) {
            if (i === 0 && j === 0) {
                continue
            }

            if (i === 0) {
                grid[i][j] += grid[i][j - 1]
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j]
            } else {
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
            }
        }
    }

    return grid[rowCount - 1][colCount - 1]
}
