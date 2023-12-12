export {largestSubmatrix}

function largestSubmatrix(matrix: number[][]): number {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (i > 0 && matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j]
            }
        }
    }

    let max: number = 0
    for (let i: number = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].toSorted((a: number, b: number): number => b - a)
        for (let j: number = 0; j < matrix[i].length; j++) {
            max = Math.max(max, matrix[i][j] * (j + 1))
        }
    }

    return max
}
