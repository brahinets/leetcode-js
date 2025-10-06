import {matrixOf} from "../../common/array-factories"

export {swimInWater}

const DIRECTIONS: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]

function swimInWater(grid: number[][]): number {
    const visited: boolean[][] = matrixOf(false, grid.length, grid.length)
    const heap: [number, number, number][] = [[grid[0][0], 0, 0]]

    while (heap.length > 0) {
        heap.sort((a: [number, number, number], b: [number, number, number]): number => a[0] - b[0])

        const [time, x, y]: [number, number, number] = heap.shift()!
        if (x === grid.length - 1 && y === grid.length - 1) {
            return time
        }

        if (visited[x][y]) {
            continue
        }

        visited[x][y] = true

        for (const [dx, dy] of DIRECTIONS) {
            const nx: number = x + dx
            const ny: number = y + dy

            if (nx >= 0 && ny >= 0 && nx < grid.length && ny < grid.length && !visited[nx][ny]) {
                heap.push([Math.max(time, grid[nx][ny]), nx, ny])
            }
        }
    }

    return -1
}
