export {equalPairs}

function equalPairs(grid: number[][]): number {
    let count: number = 0;

    for (const row of grid) {
        for (let i: number = 0; i < row.length; i++) {
            const col: number[] = grid
                .reduce((prev: number[], curr: number[]): number[] => [...prev, curr[i]], [])

            if (JSON.stringify(row) === JSON.stringify(col)) {
                count++;
            }
        }
    }

    return count;
}
