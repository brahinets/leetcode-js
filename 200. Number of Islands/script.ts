export {numIslands}

function findIslandCoordinates(grid: string[][]): number[] {
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                return [i, j]
            }
        }
    }

    return [-1, -1];
}

function numIslands(grid: string[][]): number {
    let islandsCount: number = 0;
    let hasIsland: boolean;

    do {
        const [islandCoordinateX, islandCoordinateY]: number[] = findIslandCoordinates(grid);

        hasIsland = islandCoordinateX !== -1 && islandCoordinateY !== -1;
        if (hasIsland) {
            grid = visitIsland(grid, islandCoordinateX, islandCoordinateY);
            islandsCount++;
        }
    } while (hasIsland)

    return islandsCount;
}

function visitIsland(grid: string[][], islandCoordinateX: number, islandCoordinateY: number): string[][] {
    if (islandCoordinateX < 0 || islandCoordinateY < 0 || islandCoordinateX >= grid.length || islandCoordinateY >= grid[0].length) {
        return grid;
    }

    let gridCopy: string[][] = JSON.parse(JSON.stringify(grid));

    if ('1' === gridCopy[islandCoordinateX][islandCoordinateY]) {
        gridCopy[islandCoordinateX][islandCoordinateY] = '0';

        gridCopy = visitIsland(gridCopy, islandCoordinateX - 1, islandCoordinateY);
        gridCopy = visitIsland(gridCopy, islandCoordinateX, islandCoordinateY - 1);
        gridCopy = visitIsland(gridCopy, islandCoordinateX + 1, islandCoordinateY);
        gridCopy = visitIsland(gridCopy, islandCoordinateX, islandCoordinateY + 1);
    }

    return gridCopy;
}