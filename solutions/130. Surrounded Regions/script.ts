export {solve}

function solve(board: string[][]): void {
    for (let r: number = 0; r < board.length; r++) {
        for (let c: number = 0; c < board[0].length; c++) {
            const isEdge: boolean = r === 0 || r === board.length - 1 || c === 0 || c === board[0].length - 1
            if (isEdge && board[r][c] === "O") {
                markEdgeConnected(board, r, c)
            }
        }
    }

    for (let r: number = 0; r < board.length; r++) {
        for (let c: number = 0; c < board[0].length; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X"
            } else if (board[r][c] === "#") {
                board[r][c] = "O"
            }
        }
    }
}

function markEdgeConnected(board: string[][], r: number, c: number): void {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== "O") {
        return
    }

    board[r][c] = "#"

    markEdgeConnected(board, r + 1, c)
    markEdgeConnected(board, r - 1, c)
    markEdgeConnected(board, r, c + 1)
    markEdgeConnected(board, r, c - 1)
}
