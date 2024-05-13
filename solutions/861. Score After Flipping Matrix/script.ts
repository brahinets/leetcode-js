export {matrixScore}

function matrixScore(grid: number[][]): number {
    grid = optimizeFirstMostSignificantColumn(grid)
    grid = optimizeRows(grid)
    return sumMatrixScore(grid)
}

function optimizeFirstMostSignificantColumn(grid: number[][]): number[][] {
    grid = JSON.parse(JSON.stringify(grid))

    for (let i: number = 0; i < grid.length; i++) {
        if (grid[i][0] === 0) {
            for (let j: number = 0; j < grid[0].length; j++) {
                grid[i][j] = grid[i][j] === 1 ? 0 : 1
            }
        }
    }

    return grid
}

function optimizeRows(grid: number[][]): number[][] {
    grid = JSON.parse(JSON.stringify(grid))

    for (let j: number = 1; j < grid[0].length; j++) {
        let zeros: number = 0

        for (let i: number = 0; i < grid.length; i++) {
            if (grid[i][j] === 0) {
                zeros++
            }
        }

        if (zeros > grid.length - zeros) {
            for (let i: number = 0; i < grid.length; i++) {
                grid[i][j] = grid[i][j] === 1 ? 0 : 1
            }
        }
    }

    return grid
}

function sumMatrixScore(grid: number[][]): number {
    let score: number = 0

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[i].length; j++) {
            const col: number = grid[i][j] << (grid[i].length - j - 1)
            score += col
        }
    }

    return score
}
