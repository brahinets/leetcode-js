import {arrayOfZeros} from "../../common/array-factories"

export {firstCompleteIndex}

function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const rowCount: number[] = arrayOfZeros(mat.length)
    const colCount: number[] = arrayOfZeros(mat[0].length)
    const numToPosition: Map<number, number[]> = buildPositions(mat)

    for (let i: number = 0; i < arr.length; i++) {
        const num: number = arr[i]
        const position: number[] = numToPosition.get(num)!
        const [row, col]: number[] = position

        rowCount[row]++
        colCount[col]++

        if (rowCount[row] == mat[0].length || colCount[col] == mat.length) {
            return i
        }
    }

    return -1
}

function buildPositions(mat: number[][]): Map<number, number[]> {
    const numToPosition: Map<number, number[]> = new Map<number, number[]>

    for (let row: number = 0; row < mat.length; row++) {
        for (let col: number = 0; col < mat[0].length; col++) {
            const value: number = mat[row][col]
            numToPosition.set(value, [row, col])
        }
    }

    return numToPosition
}
