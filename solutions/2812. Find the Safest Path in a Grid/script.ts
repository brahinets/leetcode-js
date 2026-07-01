import {matrixOf} from "../../common/array-factories"
import {PriorityQueue} from "../../common/PriorityQueue"

export {maximumSafenessFactor}

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]
const NOT_VISITED: number = -1
const VISITED: number = -2
const THIEF: number = 1

function maximumSafenessFactor(grid: number[][]): number {
    const safenessGrid: number[][] = buildSafenessGrid(grid)

    const maxHeap: PriorityQueue<[number, number, number]> = new PriorityQueue<[number, number, number]>(
        (a, b) => b[2] - a[2]
    )
    maxHeap.enqueue([0, 0, safenessGrid[0][0]])
    safenessGrid[0][0] = VISITED

    while (!maxHeap.isEmpty()) {
        const [x, y, safeness]: [number, number, number] = maxHeap.dequeue()!

        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return safeness
        }

        for (const [moveX, moveY] of TURNS) {
            const newX: number = x + moveX
            const newY: number = y + moveY

            if (inBounds(safenessGrid, newX, newY) && safenessGrid[newX][newY] !== VISITED) {
                maxHeap.enqueue([newX, newY, Math.min(safeness, safenessGrid[newX][newY])])
                safenessGrid[newX][newY] = VISITED
            }
        }
    }

    return -1
}

function buildSafenessGrid(grid: number[][]): number[][] {
    const safenessGrid: number[][] = matrixOf(NOT_VISITED, grid.length, grid[0].length)

    const toVisit: [number, number][] = []
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === THIEF) {
                toVisit.push([i, j])
                safenessGrid[i][j] = 0
            }
        }
    }

    let head: number = 0
    while (head < toVisit.length) {
        const [x, y]: [number, number] = toVisit[head++]

        for (const [moveX, moveY] of TURNS) {
            const newX: number = x + moveX
            const newY: number = y + moveY

            if (inBounds(safenessGrid, newX, newY) && safenessGrid[newX][newY] === NOT_VISITED) {
                safenessGrid[newX][newY] = safenessGrid[x][y] + 1
                toVisit.push([newX, newY])
            }
        }
    }

    return safenessGrid
}

function inBounds(grid: number[][], row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length
}
