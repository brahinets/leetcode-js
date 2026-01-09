export {snakesAndLadders}

function snakesAndLadders(board: number[][]): number {
    const visited: Set<number> = new Set<number>()
    const queue: [number, number][] = [[1, 0]]
    const boardCellCount: number = board.length * board.length

    while (queue.length > 0) {
        const [square, moves]: [number, number] = queue.shift()!
        if (square === boardCellCount) {
            return moves
        }

        for (let roll: number = 1; roll <= 6; roll++) {
            let nextSquare: number = square + roll
            if (nextSquare > boardCellCount) {
                continue
            }

            const [row, col]: [number, number] = getCoordinates(nextSquare, board.length)
            if (board[row][col] !== -1) {
                nextSquare = board[row][col]
            }

            if (!visited.has(nextSquare)) {
                visited.add(nextSquare)
                queue.push([nextSquare, moves + 1])
            }
        }
    }

    return -1
}

function getCoordinates(square: number, n: number): [number, number] {
    const quot: number = Math.floor((square - 1) / n)
    const rem: number = (square - 1) % n
    const row: number = n - 1 - quot
    const col: number = quot % 2 === 0 ? rem : n - 1 - rem

    return [row, col]
}
