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
    const sizes: number[] = []

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                sizes.push(dfs(i, j, grid, visited))
            }
        }
    }

    return sizes.length
}

function dfs(x: number, y: number, grid: number[][], visited: boolean[][]): number {
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0 || visited[x][y]) {
        return 0
    }

    visited[x][y] = true

    return 1 +
        dfs(x + 1, y, grid, visited) +
        dfs(x - 1, y, grid, visited) +
        dfs(x, y + 1, grid, visited) +
        dfs(x, y - 1, grid, visited)
}
