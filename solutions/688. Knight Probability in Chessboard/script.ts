export {knightProbability}

const turns: number[][] = [
    [-2, -1], [-1, -2],
    [2, -1], [1, -2],
    [2, 1], [1, 2],
    [-2, 1], [-1, 2]
]

function knightProbability(n: number, k: number, row: number, column: number): number {
    const memo: Map<string, number> = new Map<string, number>();
    return countSafeNds(n, k, row, column, memo) / (8 ** k);
}

function countSafeNds(n: number, k: number, row: number, column: number, memo: Map<string, number>): number {
    let count: number = 0;

    if (row >= 0 && row < n && column >= 0 && column < n) {
        if (k === 0) {
            count = 1;
        } else {
            const memoKey: string = `${row}${column}`;
            const safe: number | undefined = memo.get(memoKey);

            if (safe !== undefined) {
                count = safe;
            } else {
                for (const turn of turns) {
                    const nextRow: number = row + turn[0];
                    const nextCol: number = column + turn[1];
                    count += countSafeNds(n, k - 1, nextRow, nextCol, memo);
                }
            }

            memo.set(memoKey, count);
        }
    }

    return count;
}
