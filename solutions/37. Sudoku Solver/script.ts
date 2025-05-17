export {solveSudoku}

function solveSudoku(grid: string[][]): void {
    solve(grid)
}

function solve(grid: string[][]): boolean {
    const emptyCell: [number, number] | null = findEmptyCell(grid)
    if (!emptyCell) {
        return true
    }

    const [row, col]: [number, number] = emptyCell

    for (let num: number = 1; num <= 9; num++) {
        const digit: string = num.toString()

        if (canPlaceDigit(grid, row, col, digit)) {
            grid[row][col] = digit

            if (solve(grid)) {
                return true
            }

            grid[row][col] = '.'
        }
    }

    return false
}

function findEmptyCell(grid: string[][]): [number, number] | null {
    for (let row: number = 0; row < 9; row++) {
        for (let col: number = 0; col < 9; col++) {
            if (grid[row][col] === '.') {
                return [row, col]
            }
        }
    }

    return null
}

function canPlaceDigit(grid: string[][], row: number, col: number, digit: string): boolean {
    for (let i: number = 0; i < 9; i++) {
        if (grid[row][i] === digit || grid[i][col] === digit) {
            return false
        }

        const boxRow: number = 3 * Math.floor(row / 3) + Math.floor(i / 3)
        const boxCol: number = 3 * Math.floor(col / 3) + i % 3

        if (grid[boxRow][boxCol] === digit) {
            return false
        }
    }

    return true
}
