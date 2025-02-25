import {matrixOf} from "../../common/array-factories"

export {minimumTime}

function minimumTime(grid: number[][]): number {
    if (grid[0][1] > 1 && grid[1][0] > 1) {
        return -1
    }

    const directions: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const visited: boolean[][] = matrixOf(false, grid.length, grid[0].length)
    const pq: [number, number, number][] = []
    pq.push([grid[0][0], 0, 0])

    while (pq.length > 0) {
        pq.sort((a: [number, number, number], b: [number, number, number]): number => a[0] - b[0])
        const [time, row, col]: [number, number, number] = pq.shift()!

        if (row === grid.length - 1 && col === grid[0].length - 1) {
            return time
        }

        if (visited[row][col]) {
            continue
        }
        visited[row][col] = true

        for (const [dRow, dCol] of directions) {
            const nextRow: number = row + dRow
            const nextCol: number = col + dCol

            if (!isValid(visited, nextRow, nextCol)) {
                continue
            }

            const waitTime: number = (grid[nextRow][nextCol] - time) % 2 === 0 ? 1 : 0
            const nextTime: number = Math.max(grid[nextRow][nextCol] + waitTime, time + 1)
            pq.push([nextTime, nextRow, nextCol])
        }
    }

    return -1
}

function isValid(visited: boolean[][], row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < visited.length && col < visited[0].length && !visited[row][col]
}
