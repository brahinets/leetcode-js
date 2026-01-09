import {arrayOfZeros, matrixOfZeros} from "../../common/array-factories"

export {restoreMatrix}

function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const matrix: number[][] = matrixOfZeros(rowSum.length, colSum.length)

    const currentRow: number[] = arrayOfZeros(rowSum.length)
    const currentColumn: number[] = arrayOfZeros(colSum.length)

    for (let i = 0; i < rowSum.length; i++) {
        for (let j = 0; j < colSum.length; j++) {
            matrix[i][j] = Math.min(
                rowSum[i] - currentRow[i],
                colSum[j] - currentColumn[j],
            )

            currentRow[i] += matrix[i][j]
            currentColumn[j] += matrix[i][j]
        }
    }

    return matrix
}
