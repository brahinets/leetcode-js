export {closedIsland, WATER, ISLAND}

const WATER: number = 1; // WATER
const ISLAND: number = 0; // ISLAND
const VISITED: number = 2;

function closedIsland(grid: number[][]): number {
    const sea: number[][] = JSON.parse(JSON.stringify(grid));

    let closedIslandsCount: number = 0;

    let isIsland: boolean;
    do {
        const [islandCoordinateX, islandCoordinateY]: number[] = findIslandCoordinates(sea);

        isIsland = islandCoordinateX !== -1 && islandCoordinateY !== -1;
        if (isIsland && isClosedIsland(sea, islandCoordinateX, islandCoordinateY)) {
            closedIslandsCount++;
        }
    } while (isIsland)

    return closedIslandsCount;
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

function isClosedIsland(sea: number[][], islandCoordinateX: number, islandCoordinateY: number): boolean {
    if (islandCoordinateX < 0 || islandCoordinateY < 0 || islandCoordinateX >= sea.length || islandCoordinateY >= sea[0].length) {
        return false;
    }

    if (sea[islandCoordinateX][islandCoordinateY] === WATER || sea[islandCoordinateX][islandCoordinateY] === VISITED) {
        return true;
    }

    sea[islandCoordinateX][islandCoordinateY] = VISITED;

    const north: boolean = isClosedIsland(sea, islandCoordinateX - 1, islandCoordinateY);
    const south: boolean = isClosedIsland(sea, islandCoordinateX + 1, islandCoordinateY);
    const west: boolean = isClosedIsland(sea, islandCoordinateX, islandCoordinateY - 1);
    const east: boolean = isClosedIsland(sea, islandCoordinateX, islandCoordinateY + 1);

    return north && south && west && east;
}