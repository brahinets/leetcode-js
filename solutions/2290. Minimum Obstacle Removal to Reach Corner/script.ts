import {matrixOfZeros} from "../../common/array-factories"

export {minimumObstacles}

const DIRS: number[][] = [[-1, 0], [0, -1], [0, 1], [1, 0]]

function minimumObstacles(grid: number[][]): number {
    const queues: number[][][] = [[[0, 0]], [[grid.length - 1, grid[0].length - 1]]]

    const visited: number[][] = matrixOfZeros(grid.length, grid[0].length)
    visited[0][0] = 1
    visited[grid.length - 1][grid[0].length - 1] = 2

    let currentQueue: number = 0
    let moves: number = -1

    do {
        const nextQueue: number[][] = []
        for (const [y, x] of queues[currentQueue]) {
            if (visited[y][x] === 3) {
                return Math.max(0, moves)
            }

            for (const [dy, dx] of DIRS) {
                const y2: number = y + dy
                const x2: number = x + dx

                if (y2 < 0 || y2 >= grid.length || x2 < 0 || x2 >= grid[0].length || visited[y2][x2] === currentQueue + 1) {
                    continue
                }

                visited[y2][x2] += currentQueue + 1
                if (grid[y2][x2] === 1) {
                    nextQueue.push([y2, x2])
                } else {
                    queues[currentQueue].push([y2, x2])
                }
            }
        }

        queues[currentQueue] = nextQueue
        currentQueue = 1 - currentQueue
        moves++
    } while (queues[currentQueue].length > 0)

    return -1
}
