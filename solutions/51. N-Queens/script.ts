import {arrayOf} from "../../common/array-factories"

export {solveNQueens}

function solveNQueens(n: number): string[][] {
    const board: string[] = arrayOf('.'.repeat(n), n)

    return solve(0, board, n)
}

function solve(row: number, board: string[], n: number): string[][] {
    if (row === n) {
        return [[...board]]
    }

    let result: string[][] = []
    for (let col: number = 0; col < n; col++) {
        if (isSafe(row, col, board, n)) {
            const newBoard: string[] = [...board]
            newBoard[row] = newBoard[row].substring(0, col) + 'Q' + newBoard[row].substring(col + 1)
            result = result.concat(solve(row + 1, newBoard, n))
        }
    }
    return result
}

function isSafe(row: number, col: number, board: string[], n: number): boolean {
    for (let i: number = 0; i < row; i++) {
        if (board[i][col] === 'Q' ||
            (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') ||
            (col + (row - i) < n && board[i][col + (row - i)] === 'Q')) {
            return false
        }
    }

    return true
}
