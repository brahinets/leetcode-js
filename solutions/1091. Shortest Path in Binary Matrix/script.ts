export {shortestPathBinaryMatrix}

const DIRECTIONS: number[][] = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

function shortestPathBinaryMatrix(grid: number[][]): number {
    const emptyGrid:boolean = grid.length === 0 || grid[0].length === 0;
    if(emptyGrid) {
        return -1;
    }

    const hasStart:boolean = grid[0][0] === 0;
    const hasEnd:boolean = grid[grid.length - 1][grid[0].length - 1] === 0;
    if (!hasStart || !hasEnd) {
        return -1;
    }

    grid[0][0] = 1;
    const queue: number[][] = [[0, 0, 1]];

    while (queue.length > 0) {
        const cell: number[] | undefined = queue.shift();
        if (cell === undefined) {
            return -1;
        }
        const [x, y, distance]: number[] = cell;

        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return distance;
        }

        for (const direction of DIRECTIONS) {
            const newX: number = x + direction[0];
            const newY: number = y + direction[1];

            if (newX >= 0 && newX < grid.length &&
                newY >= 0 && newY < grid[0].length &&
                grid[newX][newY] === 0
            ) {
                grid[newX][newY] = 1;
                queue.push([newX, newY, distance + 1]);
            }
        }
    }

    return -1;
}
