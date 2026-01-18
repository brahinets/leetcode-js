export {largestMagicSquare}

function largestMagicSquare(grid: number[][]): number {
    const rows: number = grid.length
    const cols: number = grid[0].length
    let maxSize: number = 1

    for (let size: number = 2; size <= Math.min(rows, cols); size++) {
        for (let r: number = 0; r <= rows - size; r++) {
            for (let c: number = 0; c <= cols - size; c++) {
                if (isMagicSquare(grid, r, c, size)) {
                    maxSize = size
                }
            }
        }
    }

    return maxSize
}

function isMagicSquare(grid: number[][], startRow: number, startCol: number, size: number): boolean {
    const targetSum: number = grid[startRow]
        .slice(startCol, startCol + size)
        .reduce((a: number, b: number): number => a + b, 0)

    for (let r: number = startRow; r < startRow + size; r++) {
        const rowSum: number = grid[r]
            .slice(startCol, startCol + size)
            .reduce((a: number, b: number): number => a + b, 0)

        if (rowSum !== targetSum) {
            return false
        }
    }

    for (let c: number = startCol; c < startCol + size; c++) {
        let colSum: number = 0

        for (let r: number = startRow; r < startRow + size; r++) {
            colSum += grid[r][c]
        }

        if (colSum !== targetSum) {
            return false
        }
    }

    let primaryDiagonal: number = 0
    let secondaryDiagonal: number = 0
    for (let i: number = 0; i < size; i++) {
        primaryDiagonal += grid[startRow + i][startCol + i]
        secondaryDiagonal += grid[startRow + i][startCol + size - 1 - i]
    }

    return !(primaryDiagonal !== targetSum || secondaryDiagonal !== targetSum)
}
