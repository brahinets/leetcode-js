export {findPaths}

const mod: number = 1e9 + 7

const turns: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const memo: Map<string, number> = new Map<string, number>()
    return numberOfUnsafeEnds(m, n, maxMove, startRow, startColumn, memo)
}

function numberOfUnsafeEnds(boardHeight: number, boardWidth: number, movesLeft: number, row: number, column: number, memo: Map<string, number>): number {
    if (isOutsideBoard(boardHeight, boardWidth, row, column)) {
        return 1
    }

    if (movesLeft === 0) {
        return 0
    }

    const memoKey: string = `${movesLeft}_${row}_${column}`
    const cached: number | undefined = memo.get(memoKey)
    if (cached !== undefined) {
        return cached
    }

    let unsafe: number = 0
    for (const turn of turns) {
        const nextRow: number = row + turn[0]
        const nextCol: number = column + turn[1]
        unsafe += numberOfUnsafeEnds(boardHeight, boardWidth, movesLeft - 1, nextRow, nextCol, memo)
        unsafe %= mod
    }
    memo.set(memoKey, unsafe)

    return unsafe
}

function isOutsideBoard(boardHeight: number, boardWidth: number, row: number, column: number): boolean {
    return row < 0 || row >= boardHeight || column < 0 || column >= boardWidth
}
