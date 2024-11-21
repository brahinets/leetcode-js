import {matrixOfZeros} from "../../common/array-factories"

export {countUnguarded}

const UNGUARDED: number = 0
const GUARDED: number = 1
const GUARD: number = 2
const WALL: number = 3

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
    const grid: number[][] = matrixOfZeros(m, n)

    for (let guard of guards) {
        grid[guard[0]][guard[1]] = GUARD
    }

    for (let wall of walls) {
        grid[wall[0]][wall[1]] = WALL
    }

    for (let guard of guards) {
        markGuarded(guard[0], guard[1], grid)
    }

    let count: number = 0
    for (let row of grid) {
        for (let cell of row) {
            if (cell == UNGUARDED) {
                count++
            }
        }
    }

    return count
}

function markGuarded(row: number, col: number, grid: number[][]): void {
    for (let r: number = row - 1; r >= 0; r--) {
        if (grid[r][col] == WALL || grid[r][col] == GUARD) {
            break
        }

        grid[r][col] = GUARDED
    }

    for (let r: number = row + 1; r < grid.length; r++) {
        if (grid[r][col] == WALL || grid[r][col] == GUARD) {
            break
        }

        grid[r][col] = GUARDED
    }

    for (let c: number = col - 1; c >= 0; c--) {
        if (grid[row][c] == WALL || grid[row][c] == GUARD) {
            break
        }

        grid[row][c] = GUARDED
    }

    for (let c: number = col + 1; c < grid[0].length; c++) {
        if (grid[row][c] == WALL || grid[row][c] == GUARD) {
            break
        }

        grid[row][c] = GUARDED
    }
}
