import {matrixOf} from "../../common/array-factories"

export {pacificAtlantic}

const DIRECTIONS: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]

function pacificAtlantic(heights: number[][]): number[][] {
    if (!heights || heights.length === 0) {
        return []
    }

    const pacific: boolean[][] = matrixOf(false, heights.length, heights[0].length)
    const atlantic: boolean[][] = matrixOf(false, heights.length, heights[0].length)

    for (let i: number = 0; i < heights.length; i++) {
        dfs(i, 0, heights, pacific, heights[i][0])
        dfs(i, heights[0].length - 1, heights, atlantic, heights[i][heights[0].length - 1])
    }
    for (let j: number = 0; j < heights[0].length; j++) {
        dfs(0, j, heights, pacific, heights[0][j])
        dfs(heights.length - 1, j, heights, atlantic, heights[heights.length - 1][j])
    }

    const cells: number[][] = []
    for (let i: number = 0; i < heights.length; i++) {
        for (let j: number = 0; j < heights[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                cells.push([i, j])
            }
        }
    }

    return cells
}

function dfs(
    row: number,
    col: number,
    heights: number[][],
    visited: boolean[][],
    prevHeight: number
): void {
    const numRows: number = heights.length
    const numCols: number = heights[0].length

    if (row < 0 || row >= numRows || col < 0 || col >= numCols || visited[row][col] || heights[row][col] < prevHeight) {
        return
    }

    visited[row][col] = true

    for (const [dr, dc] of DIRECTIONS) {
        dfs(row + dr, col + dc, heights, visited, heights[row][col])
    }
}
