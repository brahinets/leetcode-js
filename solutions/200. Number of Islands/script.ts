export {numIslands}

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function findIslandCoordinates(sea: string[][], visited: Set<string>): number[] {
    for (let i: number = 0; i < sea.length; i++) {
        for (let j: number = 0; j < sea[0].length; j++) {
            if (isIsland(sea[i][j]) && !visited.has(cacheKey(i, j))) {
                return [i, j]
            }
        }
    }

    return [-1, -1]
}

function numIslands(grid: string[][]): number {
    let islandsCount: number = 0
    let hasIsland: boolean
    let visited: Set<string> = new Set<string>()
    do {
        const [islandCoordinateX, islandCoordinateY]: number[] = findIslandCoordinates(grid, visited)
        hasIsland = islandCoordinateX !== -1 && islandCoordinateY !== -1
        if (hasIsland) {
            visitIsland(grid, islandCoordinateX, islandCoordinateY, visited)
            islandsCount++
        }
    } while (hasIsland)

    return islandsCount
}

function isIsland(cell: string): boolean {
    return cell === '1'
}

function visitIsland(sea: string[][], islandCoordinateX: number, islandCoordinateY: number, visited: Set<string>): void {
    if (islandCoordinateX < 0 || islandCoordinateY < 0 || islandCoordinateX >= sea.length || islandCoordinateY >= sea[0].length) {
        return
    }

    let cell: string = cacheKey(islandCoordinateX, islandCoordinateY)
    if (isIsland(sea[islandCoordinateX][islandCoordinateY]) && !visited.has(cell)) {
        visited.add(cell)

        for (const [turnX, turnY] of TURNS) {
            visitIsland(sea, islandCoordinateX + turnX, islandCoordinateY + turnY, visited)
        }
    }
}

function cacheKey(islandCoordinateX: number, islandCoordinateY: number): string {
    return `${islandCoordinateX}:${islandCoordinateY}`
}
