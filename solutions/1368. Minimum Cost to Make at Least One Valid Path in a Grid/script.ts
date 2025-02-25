import {matrixOf} from "../../common/array-factories"

export {minCost}

const DIRECTIONS: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]

function minCost(grid: number[][]): number {
    const minCost: number[][] = matrixOf(Infinity, grid.length, grid[0].length)
    minCost[0][0] = 0

    const deque: number[][] = [[0, 0]]
    while (deque.length > 0) {
        const now: number[] = deque.shift()!
        const row: number = now[0], col = now[1]

        for (let direction: number = 0; direction < DIRECTIONS.length; direction++) {
            const newRow: number = row + DIRECTIONS[direction][0]
            const newCol: number = col + DIRECTIONS[direction][1]
            const cost: number = (grid[row][col] !== direction + 1) ? 1 : 0

            if (isValid(newRow, newCol, grid) && minCost[row][col] + cost < minCost[newRow][newCol]) {
                minCost[newRow][newCol] = minCost[row][col] + cost

                if (cost === 1) {
                    deque.push([newRow, newCol])
                } else {
                    deque.unshift([newRow, newCol])
                }
            }
        }
    }

    return minCost[grid.length - 1][grid[0].length - 1]
}

function isValid(row: number, col: number, grid: number[][]): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
}
