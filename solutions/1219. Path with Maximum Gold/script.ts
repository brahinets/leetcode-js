export {getMaximumGold}

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]
const VISITED: number = -1
const STOP: number = 0

function getMaximumGold(grid: number[][]): number {
    let max: number = 0

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            max = Math.max(max, dfs(grid, i, j))
        }
    }

    return max
}

function dfs(grid: number[][], row: number, col: number): number {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || col >= grid[0].length) {
        return 0
    }

    if (grid[row][col] === STOP || grid[row][col] === VISITED) {
        return 0
    }

    let gold: number = grid[row][col]
    let max: number = 0

    const nextGrid = JSON.parse(JSON.stringify(grid))
    nextGrid[row][col] = VISITED
    for (const [turnX, turnY] of TURNS) {
        max = Math.max(max, dfs(nextGrid, row + turnX, col + turnY))
    }

    return max + gold
}
