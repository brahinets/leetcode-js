import {matrixOf} from "../../common/array-factories"

export {rotateTheBox}

function rotateTheBox(box: string[][]): string[][] {
    const rotatedBox: string[][] = matrixOf('.', box[0].length, box.length)

    for (let row: number = 0; row < box.length; row++) {
        let lastEmptyCell: number = box[0].length - 1

        for (let col: number = box[0].length - 1; col >= 0; col--) {
            if (box[row][col] === '*') {
                rotatedBox[col][box.length - row - 1] = '*'
                lastEmptyCell = col - 1
            } else if (box[row][col] === '#') {
                rotatedBox[lastEmptyCell][box.length - row - 1] = '#'
                lastEmptyCell--
            }
        }
    }

    return rotatedBox
}
