export {exist}

const USED: string = '.'
const turns: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

function exist(board: string[][], word: string): boolean {
    for (let row: number = 0; row < board.length; row++) {
        for (let col: number = 0; col < board[0].length; col++) {
            if (dfs(row, col, board, word, 0)) {
                return true
            }
        }
    }

    return false
}

function dfs(row: number, col: number, board: string[][], word: string, index: number): boolean {
    if (index >= word.length) {
        return true
    }

    if (isValidContinue(row, col, board, word.charAt(index))) {
        board[row][col] = USED

        for (const [x, y] of turns) {
            const targetX: number = row + x
            const targetY: number = col + y

            if (dfs(targetX, targetY, board, word, index + 1)) {
                return true
            }
        }

        board[row][col] = word.charAt(index)
    }


    return false
}

function isValidContinue(row: number, col: number, board: string[][], requiredLetter: string): boolean {
    return row >= 0 && row < board.length
        && col >= 0 && col <= board[0].length
        && board[row][col] === requiredLetter
}
