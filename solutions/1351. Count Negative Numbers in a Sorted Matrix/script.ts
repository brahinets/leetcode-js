export {countNegatives}

function countNegatives(grid: number[][]): number {
    let count: number = 0;

    for (let i: number = grid.length - 1; i >= 0; i--) {
        let j: number = grid[0].length - 1;
        while (grid[i][j] < 0 && j >= 0) {
            count++;
            j--;
        }
    }

    return count;
}
