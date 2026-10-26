import { matrixOf } from '../../common/array-factories'

export { countIslands }

const DIRECTIONS: readonly number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function countIslands(grid: number[][], k: number): number {
    const visited: boolean[][] = matrixOf<boolean>(
        false,
        grid.length,
        grid[0].length
    )

    let count: number = 0
    for (let row: number = 0; row < grid.length; row++) {
        for (let column: number = 0; column < grid[0].length; column++) {
            if (grid[row][column] === 0 || visited[row][column]) {
                continue
            }

            if (islandValue(grid, visited, row, column) % k === 0) {
                count++
            }
        }
    }

    return count
}

function islandValue(
    grid: number[][],
    visited: boolean[][],
    startRow: number,
    startColumn: number
): number {
    const stack: number[][] = [[startRow, startColumn]]
    visited[startRow][startColumn] = true

    let total: number = 0
    while (stack.length > 0) {
        const [row, column]: number[] = stack.pop() as number[]
        total += grid[row][column]

        for (const [rowShift, columnShift] of DIRECTIONS) {
            const nextRow: number = row + rowShift
            const nextColumn: number = column + columnShift
            if (isUnvisitedLand(grid, visited, nextRow, nextColumn)) {
                visited[nextRow][nextColumn] = true
                stack.push([nextRow, nextColumn])
            }
        }
    }

    return total
}

function isUnvisitedLand(
    grid: number[][],
    visited: boolean[][],
    row: number,
    column: number
): boolean {
    return row >= 0
        && row < grid.length
        && column >= 0
        && column < grid[0].length
        && grid[row][column] > 0
        && !visited[row][column]
}
