export {islandPerimeter}

function islandPerimeter(grid: number[][]): number {
    let islands: number = 0
    let neighbours: number = 0

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (isIsland(grid[i][j])) {
                islands++

                if (i < grid.length - 1 && isIsland(grid[i + 1][j])) {
                    neighbours++
                }
                if (j < grid[i].length - 1 && isIsland(grid[i][j + 1])) {
                    neighbours++
                }
            }
        }
    }

    return 4 * islands - 2 * neighbours
}

function isIsland(value: number): boolean {
    return value === 1
}
