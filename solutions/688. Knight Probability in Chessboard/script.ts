export {knightProbability}

const turns: number[][] = [
    [-2, -1], [-1, -2],
    [2, -1], [1, -2],
    [2, 1], [1, 2],
    [-2, 1], [-1, 2]
]

function knightProbability(n: number, k: number, row: number, column: number): number {
    const ends: number[][] = [];
    collectPossibleEnds(n, k, row, column, ends);

    let keep: number = 0;

    for (const end of ends) {
        const endRow: number = end[0];
        const endCol: number = end[1];

        if (endRow >= 0 && endRow < n && endCol >= 0 && endCol < n) {
            keep++;
        }
    }

    return keep / 8 ** k;
}

function collectPossibleEnds(n: number, k: number, row: number, column: number, possibleEnds: number[][]): void {
    if (k === 0) {
        possibleEnds.push([row, column]);
        return;
    }

    if (row >= 0 && row < n && column >= 0 && column < n) {
        for (const turn of turns) {
            const nextRow: number = row + turn[0];
            const nextCol: number = column + turn[1];
            collectPossibleEnds(n, k - 1, nextRow, nextCol, possibleEnds);
        }
    }
}
