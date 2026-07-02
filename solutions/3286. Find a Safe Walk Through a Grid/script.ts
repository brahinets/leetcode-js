import {matrixOf} from "../../common/array-factories"
import {PriorityQueue} from "../../common/PriorityQueue"

export {findSafeWalk}

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]
const UNSAFE: number = 1

function findSafeWalk(grid: number[][], health: number): boolean {
    const minimumHealthLoss: number = computeMinimumHealthLoss(grid)

    return minimumHealthLoss <= health - 1
}

function computeMinimumHealthLoss(grid: number[][]): number {
    const rowCount: number = grid.length
    const columnCount: number = grid[0].length

    const healthLossGrid: number[][] = matrixOf(Infinity, rowCount, columnCount)
    healthLossGrid[0][0] = grid[0][0]

    const minHeap: PriorityQueue<[number, number, number]> = new PriorityQueue<[number, number, number]>(
        (a, b) => a[2] - b[2]
    )
    minHeap.enqueue([0, 0, grid[0][0]])

    while (!minHeap.isEmpty()) {
        const [x, y, healthLoss]: [number, number, number] = minHeap.dequeue()!

        if (healthLoss > healthLossGrid[x][y]) {
            continue
        }

        for (const [moveX, moveY] of TURNS) {
            const newX: number = x + moveX
            const newY: number = y + moveY

            if (inBounds(grid, newX, newY)) {
                const newHealthLoss: number = healthLoss + (grid[newX][newY] === UNSAFE ? 1 : 0)

                if (newHealthLoss < healthLossGrid[newX][newY]) {
                    healthLossGrid[newX][newY] = newHealthLoss
                    minHeap.enqueue([newX, newY, newHealthLoss])
                }
            }
        }
    }

    return healthLossGrid[rowCount - 1][columnCount - 1]
}

function inBounds(grid: number[][], row: number, column: number): boolean {
    return row >= 0 && column >= 0 && row < grid.length && column < grid[0].length
}
