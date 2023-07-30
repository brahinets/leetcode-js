import {matrixOf} from "../../common/array-utils";

export {soupServings}

const DOSES: number[][] = [[100, 0], [75, 25], [50, 50], [25, 75]]

function soupServings(n: number): number {
    return solve(n, n, matrixOf(-1, n + 1, n + 1))
}

function solve(a: number, b: number, matrix: number[][]): number {
    if (a === 0 && b === 0) {
        return 0.5
    } else if (a === 0) {
        return 1
    } else if (b === 0) {
        return 0
    } else if (matrix[a][b] !== -1) {
        return matrix[a][b]
    }

    let probability: number = 0;
    for (let i: number = 0; i < 4; i++) {
        const rema: number = a - DOSES[i][0]
        const remb: number = b - DOSES[i][1]

        probability += 0.25 * solve(Math.max(rema, 0), Math.max(remb, 0), matrix)
    }

    if (probability > 1 - 1e-5) {
        probability = 1;
    }

    matrix[a][b] = probability
    return probability
}
