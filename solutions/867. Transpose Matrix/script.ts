export {transpose}

function transpose(matrix: number[][]): number[][] {
    const result: number[][] = []

    for (let i: number = 0; i < matrix[0].length; i++) {
        const row: number[] = []

        for (let j: number = 0; j < matrix.length; j++) {
            row.push(matrix[j][i])
        }

        result.push(row)
    }

    return result
}
