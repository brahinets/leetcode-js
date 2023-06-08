export {countNegatives}

function countNegatives(grid: number[][]): number {
    let count: number = 0;

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                count++;
            }
        }
    }

    return count;
}
