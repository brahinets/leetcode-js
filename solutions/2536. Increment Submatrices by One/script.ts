import {matrixOfZeros} from "../../common/array-factories"

export {rangeAddQueries}

function rangeAddQueries(n: number, queries: number[][]): number[][] {
    const matrix: number[][] = matrixOfZeros(n, n)

    for (const [r1, c1, r2, c2] of queries) {
        for (let i: number = r1; i <= r2; i++) {
            for (let j: number = c1; j <= c2; j++) {
                matrix[i][j] += 1
            }
        }
    }

    return matrix
}
