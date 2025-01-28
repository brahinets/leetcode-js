import {matrixOf} from "../../common/array-factories"

export {findMaxFish}

function findMaxFish(grid: number[][]): number {
    let maxFishCount: number = 0

    const visited: boolean[][] = matrixOf(false, grid.length, grid[0].length)

    for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
            if (grid[row][col] > 0 && !visited[row][col]) {
                maxFishCount = Math.max(maxFishCount, calculateFishes(grid, visited, row, col))
            }
        }
    }

    return maxFishCount
}

function calculateFishes(grid: number[][], visited: boolean[][], row: number, col: number): number {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == 0) {
        return 0
    }

    if (visited[row][col]) {
        return 0
    }

    visited[row][col] = true
    return (
        grid[row][col] +
        calculateFishes(grid, visited, row, col + 1) +
        calculateFishes(grid, visited, row, col - 1) +
        calculateFishes(grid, visited, row + 1, col) +
        calculateFishes(grid, visited, row - 1, col)
    )
}
