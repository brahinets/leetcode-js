import {matrixOf} from "../../common/array-factories"

export {highestPeak}

function highestPeak(isWater: number[][]): number[][] {
    const cellHeights: number[][] = initializeCellHeights(isWater)

    calculateHeightsFromTopLeft(cellHeights, isWater)
    calculateHeightsFromBottomRight(cellHeights, isWater)

    return cellHeights
}

function initializeCellHeights(isWater: number[][]): number[][] {
    const cellHeights: number[][] = matrixOf(Infinity, isWater.length, isWater[0].length)

    for (let row: number = 0; row < isWater.length; row++) {
        for (let col: number = 0; col < isWater[0].length; col++) {
            if (isWater[row][col] === 1) {
                cellHeights[row][col] = 0
            }
        }
    }

    return cellHeights
}

function calculateHeightsFromTopLeft(cellHeights: number[][], isWater: number[][]): void {
    for (let row: number = 0; row < isWater.length; row++) {
        for (let col: number = 0; col < isWater[0].length; col++) {
            let minNeighborDistance = Infinity

            if (isValidCell(row - 1, col, isWater.length, isWater[0].length)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[row - 1][col])
            }

            if (isValidCell(row, col - 1, isWater.length, isWater[0].length)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[row][col - 1])
            }

            cellHeights[row][col] = Math.min(cellHeights[row][col], minNeighborDistance + 1)
        }
    }
}

function calculateHeightsFromBottomRight(cellHeights: number[][], isWater: number[][]): void {
    for (let row: number = isWater.length - 1; row >= 0; row--) {
        for (let col: number = isWater[0].length - 1; col >= 0; col--) {
            let minNeighborDistance: number = Infinity

            if (isValidCell(row + 1, col, isWater.length, isWater[0].length)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[row + 1][col])
            }

            if (isValidCell(row, col + 1, isWater.length, isWater[0].length)) {
                minNeighborDistance = Math.min(minNeighborDistance, cellHeights[row][col + 1])
            }

            cellHeights[row][col] = Math.min(cellHeights[row][col], minNeighborDistance + 1)
        }
    }
}

function isValidCell(row: number, col: number, rows: number, columns: number): boolean {
    return row >= 0 && col >= 0 && row < rows && col < columns
}
