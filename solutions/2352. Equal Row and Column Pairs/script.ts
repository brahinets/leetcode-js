export {equalPairs}

function equalPairs(grid: number[][]): number {
    if (grid.length === 0 || grid.length !== grid[0].length) {
        return 0;
    }

    let count: number = 0;
    const cols: Array<number[]> = collectColumns(grid);
    for (const row of grid) {
        for (const col of cols) {
            if (JSON.stringify(row) === JSON.stringify(col)) {
                count++;
            }
        }
    }

    return count;
}

function collectColumns(grid: number[][]): Array<number[]> {
    const cols: Array<number[]> = [];

    for (let i: number = 0; i < grid[0].length; i++) {
        cols.push(grid.reduce((agg: number[], curr: number[]): number[] => {
            agg.push(curr[i]);
            return agg;
        }, []));
    }

    return cols;
}
