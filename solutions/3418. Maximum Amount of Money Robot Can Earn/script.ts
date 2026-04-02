import { arrayOf, matrixOfZeros } from "../../common/array-factories"

export { maximumAmount }

function maximumAmount(coins: number[][]): number {
    const rows: number = coins.length
    const columns: number = coins[0].length
    const MAX_NEUTRALIZATIONS: number = 2

    const dp: number[][][] = arrayOf(matrixOfZeros(columns, MAX_NEUTRALIZATIONS + 1), rows)

    for (let row: number = rows - 1; row >= 0; row--) {
        for (let column: number = columns - 1; column >= 0; column--) {
            const cellValue: number = coins[row][column]

            for (let neutralizations: number = 0; neutralizations <= MAX_NEUTRALIZATIONS; neutralizations++) {
                const isLastCell: boolean = row === rows - 1 && column === columns - 1

                if (isLastCell) {
                    if (cellValue < 0 && neutralizations > 0) {
                        dp[row][column][neutralizations] = 0
                    } else {
                        dp[row][column][neutralizations] = cellValue
                    }
                    continue
                }

                const canGoDown: boolean = row + 1 < rows
                const canGoRight: boolean = column + 1 < columns
                let bestNext: number = -Infinity

                if (canGoDown) {
                    bestNext = Math.max(bestNext, dp[row + 1][column][neutralizations])
                }
                if (canGoRight) {
                    bestNext = Math.max(bestNext, dp[row][column + 1][neutralizations])
                }

                if (cellValue < 0 && neutralizations > 0) {
                    let bestNextWithOneFewer: number = -Infinity

                    if (canGoDown) {
                        bestNextWithOneFewer = Math.max(bestNextWithOneFewer, dp[row + 1][column][neutralizations - 1])
                    }
                    if (canGoRight) {
                        bestNextWithOneFewer = Math.max(bestNextWithOneFewer, dp[row][column + 1][neutralizations - 1])
                    }

                    dp[row][column][neutralizations] = Math.max(
                        cellValue + bestNext,
                        bestNextWithOneFewer
                    )
                } else {
                    dp[row][column][neutralizations] = cellValue + bestNext
                }
            }
        }
    }

    return dp[0][0][MAX_NEUTRALIZATIONS]
}
