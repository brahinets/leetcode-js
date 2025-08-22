export {minimumArea}

function minimumArea(grid: number[][]): number {
    let minRow: number = grid.length
    let maxRow: number = -1
    let minCol: number = grid[0].length
    let maxCol: number = -1

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                minRow = Math.min(minRow, i)
                maxRow = Math.max(maxRow, i)
                minCol = Math.min(minCol, j)
                maxCol = Math.max(maxCol, j)
            }
        }
    }

    return (maxRow - minRow + 1) * (maxCol - minCol + 1)
}
