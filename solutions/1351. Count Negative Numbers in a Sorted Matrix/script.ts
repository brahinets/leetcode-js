export {countNegatives}

function countNegatives(grid: number[][]): number {
    let count: number = 0;

    for (const row of grid) {
        let j: number = grid[0].length - 1;
        while (row[j] < 0 && j >= 0) {
            count++;
            j--;
        }
    }

    return count;
}
