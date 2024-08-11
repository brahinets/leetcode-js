import {matrixOf} from "../../common/array-factories"

export {minDays}

function minDays(grid: number[][]): number {
    if (countIslands(grid) !== 1) {
        return 0
    }

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0

                if (countIslands(grid) !== 1) {
                    return 1
                }

                grid[i][j] = 1
            }
        }
    }

    return 2
}

function countIslands(grid: number[][]): number {
    const visited: boolean[][] = matrixOf(false, grid.length, grid[0].length)
    let islandCount: number = 0

    function dfs(x: number, y: number): void {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0 || visited[x][y]) {
            return
        }

        visited[x][y] = true

        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                islandCount++

                dfs(i, j)
            }
        }
    }

    return islandCount
}


