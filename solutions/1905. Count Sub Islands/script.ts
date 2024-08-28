export {countSubIslands}

function countSubIslands(grid1: number[][], grid2: number[][]): number {
    let count: number = 0

    for (let i: number = 0; i < grid1.length; i++) {
        for (let j: number = 0; j < grid1[i].length; j++) {
            if (grid2[i][j] === 1) {
                count += dfs(grid1, grid2, i, j)
            }
        }
    }

    return count
}

function dfs(grid1: number[][], grid2: number[][], i: number, j: number): number {
    if (i < 0 || i >= grid2.length || j < 0 || j >= grid2[i].length || grid2[i][j] === 0) {
        return 1
    }

    grid2[i][j] = 0

    let count: number = 1
    count &= dfs(grid1, grid2, i - 1, j)
    count &= dfs(grid1, grid2, i + 1, j)
    count &= dfs(grid1, grid2, i, j - 1)
    count &= dfs(grid1, grid2, i, j + 1)

    return count & grid1[i][j]
}
