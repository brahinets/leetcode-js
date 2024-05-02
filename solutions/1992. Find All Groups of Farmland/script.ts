export {findFarmland}

function findFarmland(land: number[][]): number[][] {
    const lands: number[][] = []

    for (let i: number = 0; i < land.length; i++) {
        for (let j: number = 0; j < land[0].length; j++) {
            if (land[i][j] === 1) {
                lands.push(visitFarmland(land, i, j))
            }
        }
    }

    return lands
}

function visitFarmland(grid: number[][], islandCoordinateX: number, islandCoordinateY: number): number[] {
    let endX: number = islandCoordinateX
    let endY: number = islandCoordinateY

    while (endX < grid.length && grid[endX][islandCoordinateY] === 1) {
        endY = islandCoordinateY

        while (endY < grid[0].length && grid[endX][endY] === 1) {
            grid[endX][endY] = 0
            endY++
        }
        endX++
    }

    return [islandCoordinateX, islandCoordinateY, endX - 1, endY - 1]
}
