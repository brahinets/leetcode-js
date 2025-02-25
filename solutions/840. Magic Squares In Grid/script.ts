export {numMagicSquaresInside}

function numMagicSquaresInside(grid: number[][]): number {
    let count: number = 0

    for (let i: number = 0; i < grid.length - 2; i++) {
        for (let j: number = 0; j < grid[0].length - 2; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++
            }
        }
    }

    return count
}

function isMagicSquare(grid: number[][], i: number, j: number) {
    const set: Set<number> = new Set<number>()

    for (let x: number = i; x < i + 3; x++) {
        for (let y: number = j; y < j + 3; y++) {
            if (grid[x][y] < 1 || grid[x][y] > 9) {
                return false
            }

            if (set.has(grid[x][y])) {
                return false
            }

            set.add(grid[x][y])
        }
    }

    const sum: number = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
    for (let x: number = i + 1; x < i + 3; x++) {
        let tempSum: number = 0

        for (let y: number = j; y < j + 3; y++) {
            tempSum += grid[x][y]
        }

        if (tempSum !== sum) {
            return false
        }
    }

    for (let y: number = j; y < j + 3; y++) {
        let tempSum: number = 0

        for (let x: number = i; x < i + 3; x++) {
            tempSum += grid[x][y]
        }

        if (tempSum !== sum) {
            return false
        }
    }

    if (grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] !== sum) {
        return false
    }

    return grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] === sum
}
