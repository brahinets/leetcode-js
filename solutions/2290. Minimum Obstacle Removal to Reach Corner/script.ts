import {matrixOf} from "../../common/array-factories"

export {minimumObstacles}

function minimumObstacles(grid: number[][]): number {
    const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const minObstacles: number[][] = matrixOf(Number.MAX_SAFE_INTEGER, grid.length, grid[0].length)
    minObstacles[0][0] = 0

    const deque: [number, number, number][] = []
    deque.push([0, 0, 0])

    while (deque.length > 0) {
        const [obstacles, row, col]: [number, number, number] = deque.shift()!

        for (const [dRow, dCol] of directions) {
            const newRow: number = row + dRow
            const newCol: number = col + dCol

            if (isValid(grid, newRow, newCol) && minObstacles[newRow][newCol] === Number.MAX_SAFE_INTEGER) {
                const newObstacles: number = obstacles + grid[newRow][newCol]

                if (grid[newRow][newCol] === 1) {
                    deque.push([newObstacles, newRow, newCol])
                } else {
                    deque.unshift([newObstacles, newRow, newCol])
                }

                minObstacles[newRow][newCol] = newObstacles
            }
        }
    }

    return minObstacles[grid.length - 1][grid[0].length - 1]
}


function isValid(grid: number[][], row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length
}
