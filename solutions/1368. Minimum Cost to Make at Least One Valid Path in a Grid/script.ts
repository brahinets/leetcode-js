import {matrixOf} from "../../common/array-factories"
import {arraysAreEqual} from "../../common/array-utils"

export {minCost}

function minCost(grid: number[][]): number {
    const minChanges: number[][] = matrixOf(Infinity, grid.length, grid[0].length)
    minChanges[0][0] = 0

    while (true) {
        const previousState: number[][] = minChanges.map(row => [...row])

        for (let row: number = 0; row < grid.length; row++) {
            for (let col: number = 0; col < grid[0].length; col++) {
                if (row > 0) {
                    minChanges[row][col] = Math.min(
                        minChanges[row][col],
                        minChanges[row - 1][col] +
                        (grid[row - 1][col] === 3 ? 0 : 1)
                    )
                }

                if (col > 0) {
                    minChanges[row][col] = Math.min(
                        minChanges[row][col],
                        minChanges[row][col - 1] +
                        (grid[row][col - 1] === 1 ? 0 : 1)
                    )
                }
            }
        }

        for (let row: number = grid.length - 1; row >= 0; row--) {
            for (let col: number = grid[0].length - 1; col >= 0; col--) {
                if (row < grid.length - 1) {
                    minChanges[row][col] = Math.min(
                        minChanges[row][col],
                        minChanges[row + 1][col] +
                        (grid[row + 1][col] === 4 ? 0 : 1)
                    )
                }

                if (col < grid[0].length - 1) {
                    minChanges[row][col] = Math.min(
                        minChanges[row][col],
                        minChanges[row][col + 1] +
                        (grid[row][col + 1] === 2 ? 0 : 1)
                    )
                }
            }
        }

        if (arraysAreEqual(previousState, minChanges)) {
            break
        }
    }

    return minChanges[grid.length - 1][grid[0].length - 1]
}
