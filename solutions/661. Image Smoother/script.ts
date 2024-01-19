import {matrixOf} from "../../common/array-factories"

export {imageSmoother}

function imageSmoother(img: number[][]): number[][] {
    const result: number[][] = matrixOf(0, img.length, img[0].length)

    for (let i: number = 0; i < img.length; i++) {
        for (let j: number = 0; j < img[i].length; j++) {
            result[i][j] = getAverage(img, i, j)
        }
    }

    return result
}

function getAverage(img: number[][], row: number, col: number): number {
    let sum: number = 0
    let found: number = 0

    for (let k: number = row - 1; k <= row + 1; k++) {
        for (let l: number = col - 1; l <= col + 1; l++) {
            if (img[k] && img[k][l] !== undefined) {
                sum += img[k][l]
                found++
            }
        }
    }

    return Math.floor(sum / found)
}
