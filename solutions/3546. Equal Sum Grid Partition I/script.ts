export { canPartitionGrid }

function canPartitionGrid(grid: number[][]): boolean {
    const rows: number = grid.length
    const columns: number = grid[0].length

    let total: number = 0
    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            total += grid[row][column]
        }
    }

    let prefixSum: number = 0
    for (let row: number = 0; row < rows - 1; row++) {
        for (let column: number = 0; column < columns; column++) {
            prefixSum += grid[row][column]
        }
        if (prefixSum * 2 === total) {
            return true
        }
    }

    prefixSum = 0
    for (let column: number = 0; column < columns - 1; column++) {
        for (let row: number = 0; row < rows; row++) {
            prefixSum += grid[row][column]
        }
        if (prefixSum * 2 === total) {
            return true
        }
    }

    return false
}
