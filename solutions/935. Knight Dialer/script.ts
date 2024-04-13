export {knightDialer}

const turns: number[][] = [
    [-2, -1], [-1, -2],
    [2, -1], [1, -2],
    [2, 1], [1, 2],
    [-2, 1], [-1, 2]
]

const MOD: number = 10 ** 9 + 7

function knightDialer(n: number): number {
    const memo: Map<string, number> = new Map<string, number>()

    let chance: number = 0
    for (let i: number = 0; i < 4; i++) {
        for (let j: number = 0; j < 3; j++) {
            chance += chanceOfSafeEnds(n - 1, i, j, memo)
        }
    }

    return chance % MOD
}

function chanceOfSafeEnds(turnsLeft: number, row: number, column: number, memo: Map<string, number>): number {
    if (!isInsideBoard(row, column)) {
        return 0
    }

    if (turnsLeft === 0) {
        return 1
    }

    const memoKey: string = `${turnsLeft}_${row}_${column}`
    const cached: number | undefined = memo.get(memoKey)
    if (cached !== undefined) {
        return cached
    }

    let probability: number = 0
    for (const turn of turns) {
        const nextRow: number = row + turn[0]
        const nextCol: number = column + turn[1]

        if (isInsideBoard(nextRow, nextCol)) {
            probability += chanceOfSafeEnds(turnsLeft - 1, nextRow, nextCol, memo) % MOD
        }
    }
    memo.set(memoKey, probability)

    return probability
}

function isInsideBoard(row: number, column: number): boolean {
    if (row === 3 && (column === 0 || column === 2)) {
        return false
    }

    return row >= 0 && row < 4 && column >= 0 && column < 3
}
