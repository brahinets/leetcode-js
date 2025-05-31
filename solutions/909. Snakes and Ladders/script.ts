export {snakesAndLadders}

function snakesAndLadders(board: number[][]): number {
    const visited: Set<number> = new Set<number>()
    const queue: [number, number][] = [[1, 0]]

    while (queue.length > 0) {
        const [current, steps]: [number, number] = queue.shift()!
        if (current === board.length * board.length) {
            return steps
        }

        for (let dice: number = 1; dice <= 6; dice++) {
            let next: number = current + dice
            if (next > board.length * board.length) {
                continue
            }

            const row: number = Math.floor((next - 1) / board.length)
            const col: number = (row % 2 === 0) ? (next - 1) % board.length : (board.length - 1) - ((next - 1) % board.length)
            if (board[board.length - 1 - row][col] !== -1) {
                next = board[board.length - 1 - row][col]
            }

            if (!visited.has(next)) {
                visited.add(next)
                queue.push([next, steps + 1])
            }
        }
    }

    return -1
}
