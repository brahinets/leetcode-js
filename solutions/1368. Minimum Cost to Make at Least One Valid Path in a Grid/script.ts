import {PriorityQueue} from "../../common/PriorityQueue"
import {matrixOf} from "../../common/array-factories"

export {minCost}

const DIRECTIONS: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]

function minCost(grid: number[][]): number {
    const movementsQueue = new PriorityQueue<number[]>(((a: number[], b: number[]): number => a[0] - b[0]))
    movementsQueue.enqueue([0, 0, 0])

    const minCost: number[][] = matrixOf(Number.MAX_SAFE_INTEGER, grid.length, grid[0].length)
    minCost[0][0] = 0

    while (!movementsQueue.isEmpty()) {
        const current: number[] = movementsQueue.dequeue()!
        const [cost, row, col]: number[] = current

        if (minCost[row][col] != cost) {
            continue
        }

        for (let direction: number = 0; direction < 4; direction++) {
            const newRow: number = row + DIRECTIONS[direction][0]
            const newCol: number = col + DIRECTIONS[direction][1]

            if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
                const newCost: number = cost + (direction != (grid[row][col] - 1) ? 1 : 0)

                if (minCost[newRow][newCol] > newCost) {
                    minCost[newRow][newCol] = newCost
                    movementsQueue.enqueue([newCost, newRow, newCol])
                }
            }
        }
    }

    return minCost[grid.length - 1][grid[0].length - 1]
}
