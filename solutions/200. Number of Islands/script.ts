export {numIslands}

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function numIslands(grid: string[][]): number {
    let islandsCount: number = 0
    let visited: Set<string> = new Set<string>()

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (isIsland(grid[i][j]) && !visited.has(cacheKey(i, j))) {
                visitIsland(grid, i, j, visited)
                islandsCount++
            }
        }
    }

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
