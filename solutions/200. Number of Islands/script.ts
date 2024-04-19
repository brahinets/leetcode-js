export {numIslands}

const ISLAND: string = '1'
const VISITED: string = '2'

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function findIslandCoordinates(sea: string[][]): number[] {
    for (let i: number = 0; i < sea.length; i++) {
        for (let j: number = 0; j < sea[0].length; j++) {
            if (sea[i][j] === ISLAND) {
                return [i, j]
            }
        }
    }

    return [-1, -1]
}

function numIslands(grid: string[][]): number {
    const sea: string[][] = JSON.parse(JSON.stringify(grid))

    let islandsCount: number = 0
    let hasIsland: boolean

    do {
        const [islandCoordinateX, islandCoordinateY]: number[] = findIslandCoordinates(sea)

        hasIsland = islandCoordinateX !== -1 && islandCoordinateY !== -1
        if (hasIsland) {
            visitIsland(sea, islandCoordinateX, islandCoordinateY)
            islandsCount++
        }
    } while (hasIsland)

    return islandsCount
}


function visitIsland(sea: string[][], islandCoordinateX: number, islandCoordinateY: number): void {
    if (islandCoordinateX < 0 || islandCoordinateY < 0 || islandCoordinateX >= sea.length || islandCoordinateY >= sea[0].length) {
        return
    }

    if (ISLAND === sea[islandCoordinateX][islandCoordinateY]) {
        sea[islandCoordinateX][islandCoordinateY] = VISITED

        for (const [turnX, turnY] of TURNS) {
            visitIsland(sea, islandCoordinateX + turnX, islandCoordinateY + turnY)
        }
    }
}
