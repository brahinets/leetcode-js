export {setZeroes}

function setZeroes(matrix: number[][]): void {
    let firstRowZero: boolean = false
    let firstColumnZero: boolean = false

    for (let i: number = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColumnZero = true
        }
    }

    for (let j: number = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true
        }
    }

    for (let i: number = 1; i < matrix.length; i++) {
        for (let j: number = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i: number = 1; i < matrix.length; i++) {
        for (let j: number = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (firstRowZero) {
        for (let j: number = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }

    if (firstColumnZero) {
        for (let i: number = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
}
