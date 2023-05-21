export {shortestBridge}

const ISLAND: number = 1;
const VISITED: number = 2;

function shortestBridge(grid: number[][]): number {
    const firstIsland: number[] = findIslandCoordinates(grid);
    if (firstIsland[0] === -1 || firstIsland[1] === -1) {
        return 0;
    }
    visitIsland(grid, firstIsland[0], firstIsland[1]);

    const firstIslandCoordinates: Array<number[]> = collectIslandCoordinates(grid, 1);
    const secondIslandCoordinates: Array<number[]> = collectIslandCoordinates(grid, 2);
    let minBridge: number = grid.length + grid.length - 1;

    for (const first of firstIslandCoordinates) {
        for (const second of secondIslandCoordinates) {
            const bridgeSize: number = distance(first[0], first[1], second[0], second[1]) - 1;

            if (bridgeSize < minBridge) {
                minBridge = bridgeSize;
            }
        }
    }

    return minBridge;
}

function distance(firstX: number, firstY: number, secondX: number, secondY: number) {
    return Math.abs(firstX - secondX) + Math.abs(firstY - secondY);
}

function findIslandCoordinates(sea: number[][]): number[] {
    for (let i: number = 0; i < sea.length; i++) {
        for (let j: number = 0; j < sea[0].length; j++) {
            if (sea[i][j] === ISLAND) {
                return [i, j]
            }
        }
    }

    return [-1, -1];
}

function collectIslandCoordinates(grid: number[][], islandCode: number) {
    const coordinates: Array<number[]> = [];

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === islandCode) {
                coordinates.push([i, j]);
            }
        }
    }

    return coordinates;
}

function visitIsland(sea: number[][], islandCoordinateX: number, islandCoordinateY: number): void {
    if (islandCoordinateX < 0 || islandCoordinateY < 0 || islandCoordinateX >= sea.length || islandCoordinateY >= sea[0].length) {
        return;
    }

    if (ISLAND === sea[islandCoordinateX][islandCoordinateY]) {
        sea[islandCoordinateX][islandCoordinateY] = VISITED;

        visitIsland(sea, islandCoordinateX - 1, islandCoordinateY);
        visitIsland(sea, islandCoordinateX, islandCoordinateY - 1);
        visitIsland(sea, islandCoordinateX + 1, islandCoordinateY);
        visitIsland(sea, islandCoordinateX, islandCoordinateY + 1);
    }
}