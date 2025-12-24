import {sum} from "../../common/array-utils"

export {gridGame}

function gridGame(grid: number[][]): number {
    let firstRowSum: number = sum(grid[0])

    let secondRowSum: number = 0
    let minimumSum: number = Infinity
    for (let turnIndex: number = 0; turnIndex < grid[0].length; ++turnIndex) {
        firstRowSum -= grid[0][turnIndex]

        minimumSum = Math.min(minimumSum, Math.max(firstRowSum, secondRowSum))
        secondRowSum += grid[1][turnIndex]
    }

    return minimumSum
}
