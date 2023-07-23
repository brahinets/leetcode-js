export {knightProbability}

const turns: number[][] = [
    [-2, -1], [-1, -2],
    [2, -1], [1, -2],
    [2, 1], [1, 2],
    [-2, 1], [-1, 2]
]

function knightProbability(n: number, k: number, row: number, column: number): number {
    const memo: Map<string, number> = new Map<string, number>();
    return chanceOfSafeEnds(n, k, row, column, memo);
}

function chanceOfSafeEnds(n: number, k: number, row: number, column: number, memo: Map<string, number>): number {
    if (k === 0) {
        return isInsideBoard(n, row, column) ? 1 : 0;
    }

    let probability: number = 0;
    const memoKey: string = `${k}${row}${column}`;
    const safe: number | undefined = memo.get(memoKey);

    if (safe !== undefined) {
        probability = safe;
    } else {
        for (const turn of turns) {
            const nextRow: number = row + turn[0];
            const nextCol: number = column + turn[1];
            if (isInsideBoard(n, nextRow, nextCol)) {
                probability += chanceOfSafeEnds(n, k - 1, nextRow, nextCol, memo) / 8;
            }
        }

        memo.set(memoKey, probability);
    }

    return probability;
}

function isInsideBoard(boardSize: number, row: number, column: number): boolean {
    return row >= 0 && row < boardSize && column >= 0 && column < boardSize;
}
