export {equalPairs}

function equalPairs(grid: number[][]): number {
    if (grid.length === 0) {
        return 0;
    }

    let count: number = 0;
    const cols: Array<number[]> = [];
    for (let i: number = 0; i < grid[0].length; i++) {
        cols.push(grid.reduce((prev: number[], curr: number[]): number[] => [...prev, curr[i]], []))
    }

    for (const row of grid) {
        for (const col of cols) {
            if (JSON.stringify(row) === JSON.stringify(col)) {
                count++;
            }
        }
    }

    return count;
}
