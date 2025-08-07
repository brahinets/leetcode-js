import {arrayOf} from "../../common/array-factories"

export {maxCollectedFruits}

function maxCollectedFruits(fruits: number[][]): number {
    let totalFruits: number = collectDiagonalFruits(fruits)

    totalFruits += calculateMaxPathSum(fruits)
    transposeMatrix(fruits)
    totalFruits += calculateMaxPathSum(fruits)

    return totalFruits
}

function collectDiagonalFruits(fruits: number[][]): number {
    let diagonalSum: number = 0

    for (let i: number = 0; i < fruits.length; i++) {
        diagonalSum += fruits[i][i]
    }

    return diagonalSum
}

function calculateMaxPathSum(fruits: number[][]): number {
    const n: number = fruits.length
    let previousRow: number[] = arrayOf(Number.MIN_SAFE_INTEGER, n)
    let currentRow: number[] = arrayOf(Number.MIN_SAFE_INTEGER, n)
    previousRow[n - 1] = fruits[0][n - 1]

    for (let row: number = 1; row < n - 1; row++) {
        for (let col: number = Math.max(n - 1 - row, row + 1); col < n; col++) {
            let maxPrevious: number = previousRow[col]

            if (col - 1 >= 0) {
                maxPrevious = Math.max(maxPrevious, previousRow[col - 1])
            }

            if (col + 1 < n) {
                maxPrevious = Math.max(maxPrevious, previousRow[col + 1])
            }

            currentRow[col] = maxPrevious + fruits[row][col]
        }

        const temp: number[] = previousRow
        previousRow = currentRow
        currentRow = temp
    }

    return previousRow[n - 1]
}

function transposeMatrix(matrix: number[][]): void {
    const n: number = matrix.length

    for (let i: number = 0; i < n; i++) {
        for (let j: number = 0; j < i; j++) {
            const temp: number = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
}
