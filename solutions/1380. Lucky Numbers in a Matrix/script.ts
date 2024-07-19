export {luckyNumbers}

function luckyNumbers(matrix: number[][]): number[] {
    const rowMin: number[] = rowMinimums(matrix)
    const colMax: number[] = colMaximums(matrix)

    return collectLuckyNumbers(matrix, rowMin, colMax)
}

function rowMinimums(matrix: number[][]): number[] {
    const minimums: number[] = []

    for (let i: number = 0; i < matrix.length; i++) {
        let min: number = Number.MAX_SAFE_INTEGER

        for (let j: number = 0; j < matrix[i].length; j++) {
            min = Math.min(min, matrix[i][j])
        }

        minimums.push(min)
    }

    return minimums
}

function colMaximums(matrix: number[][]): number[] {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return []
    }

    const numRows: number = matrix.length
    const numCols: number = matrix[0].length
    const maximums: number[] = []

    for (let col: number = 0; col < numCols; col++) {
        let cMax: number = Number.MIN_SAFE_INTEGER

        for (let row: number = 0; row < numRows; row++) {
            cMax = Math.max(cMax, matrix[row][col])
        }

        maximums.push(cMax)
    }

    return maximums
}

function collectLuckyNumbers(matrix: number[][], rowMin: number[], colMax: number[]): number[] {
    const luckyNumbers: number[] = []

    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]) {
                luckyNumbers.push(matrix[i][j])
            }
        }
    }

    return luckyNumbers
}
