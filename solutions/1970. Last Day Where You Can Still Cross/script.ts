import {matrixOf, matrixOfZeros} from "../../common/array-factories"

export {latestDayToCross}

function latestDayToCross(row: number, col: number, cells: number[][]): number {
    const directions: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    let left: number = 1
    let right: number = cells.length
    let result: number = 0

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)

        if (canCross(row, col, cells, mid, directions)) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return result
}

function buildGrid(row: number, col: number, cells: number[][], day: number): number[][] {
    const grid: number[][] = matrixOfZeros(row, col)

    for (let i: number = 0; i < day; i++) {
        const [r, c]: number[] = cells[i]

        grid[r - 1][c - 1] = 1
    }

    return grid
}

function bfs(grid: number[][], row: number, col: number, directions: number[][]): boolean {
    const visited: boolean[][] = matrixOf(false, row, col)
    const queue: number[][] = []
    for (let c:number = 0; c < col; c++) {
        if (grid[0][c] === 0) {
            queue.push([0, c])
            visited[0][c] = true
        }
    }
    while (queue.length > 0) {
        const [r, c]: number[] = queue.shift()!

        if (r === row - 1){
            return true
        }

        for (const [dr, dc] of directions) {
            const newRow: number = r + dr
            let newCol: number = c + dc

            if (
                newRow >= 0 && newRow < row &&
                newCol >= 0 && newCol < col &&
                grid[newRow][newCol] === 0 &&
                !visited[newRow][newCol]
            ) {
                queue.push([newRow, newCol])
                visited[newRow][newCol] = true
            }
        }
    }

    return false
}

function canCross(row: number, col: number, cells: number[][], day: number, directions: number[][]): boolean {
    const grid: number[][] = buildGrid(row, col, cells, day)

    return bfs(grid, row, col, directions)
}
