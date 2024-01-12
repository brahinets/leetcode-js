export {numEnclaves, ISLAND, WATER}

const ISLAND: number = 1
const WATER: number = 0
const VISITED: number = 2

function numEnclaves(grid: number[][]): number {
    const sea: number[][] = JSON.parse(JSON.stringify(grid))

    let isIsland: boolean
    do {
        const [islandCoordinateX, islandCoordinateY]: number[] = findBorderIslandCoordinates(sea)

        isIsland = islandCoordinateX !== -1 && islandCoordinateY !== -1
        if (isIsland) {
            visitIsland(sea, islandCoordinateX, islandCoordinateY)
        }
    } while (isIsland)

    return sea.reduce((sum: number, row: number[]): number => {
        return sum + row.reduce((s: number, cell: number): number => {
            return s + (cell === ISLAND ? 1 : 0)
        }, 0)
    }, 0)
}

function findBorderIslandCoordinates(sea: number[][]): number[] {
    for (let i: number = 0; i < sea.length; i++) {
        for (let j: number = 0; j < sea[0].length; j++) {
            if (i === 0 || j === 0 || i === sea.length - 1 || j === sea[0].length - 1) {
                if (sea[i][j] === ISLAND) {
                    return [i, j]
                }
            }
        }
    }

    return [-1, -1]
}

function visitIsland(sea: number[][], islandCoordinateX: number, islandCoordinateY: number): void {
    if (islandCoordinateX < 0 || islandCoordinateY < 0 || islandCoordinateX >= sea.length || islandCoordinateY >= sea[0].length) {
        return
    }

    if (sea[islandCoordinateX][islandCoordinateY] === WATER || sea[islandCoordinateX][islandCoordinateY] === VISITED) {
        return
    }

    sea[islandCoordinateX][islandCoordinateY] = VISITED

    visitIsland(sea, islandCoordinateX - 1, islandCoordinateY)
    visitIsland(sea, islandCoordinateX + 1, islandCoordinateY)
    visitIsland(sea, islandCoordinateX, islandCoordinateY - 1)
    visitIsland(sea, islandCoordinateX, islandCoordinateY + 1)
}
