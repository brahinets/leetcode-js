import {arrayOf, matrixOf} from "../../common/array-factories"

export {cherryPickup}

function cherryPickup(grid: number[][]): number {
    const maxForRowByRobot1Col1Robot2Col2: number[][][] = arrayOf(matrixOf(-1, grid[0].length, grid[0].length), grid.length)
    return walk(grid, 0, 0, grid[0].length - 1, maxForRowByRobot1Col1Robot2Col2)
}

function walk(grid: number[][], row: number, col1: number, col2: number, memo: number[][][]): number {
    if (row === grid.length) {
        return 0
    } else if (memo[row][col1][col2] > -1) {
        return memo[row][col1][col2]
    }

    let best: number = -Infinity

    for (let off1: number = -1; off1 < 2; off1++) {
        const nextCol1: number = col1 + off1

        if (nextCol1 < grid[0].length && nextCol1 >= 0) {
            for (let off2: number = -1; off2 < 2; off2++) {
                const nextCol2: number = col2 + off2

                if (nextCol2 < grid[0].length && nextCol2 >= 0 && nextCol1 < nextCol2) {
                    best = Math.max(best, grid[row][col1] + grid[row][col2] + walk(grid, row + 1, nextCol1, nextCol2, memo))
                }
            }
        }

        memo[row][col1][col2] = best
    }

    return best
}
