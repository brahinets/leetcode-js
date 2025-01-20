export {firstCompleteIndex}

function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const numToPos: Map<number, Pair<number, number>> = buildPositions(mat)

    for (let i = 0; i < arr.length; i++) {
        const num: number = arr[i]
        const position: Pair<number, number> = numToPos.get(num)!
        const row: number = position.key
        const col: number = position.value
        mat[row][col] = -mat[row][col]

        if (checkRow(row, mat) || checkColumn(col, mat)) {
            return i
        }
    }

    return -1
}

function buildPositions(mat: number[][]): Map<number, Pair<number, number>> {
    const numToPos: Map<number, Pair<number, number>> = new Map<number, Pair<number, number>>()

    for (let row: number = 0; row < mat.length; row++) {
        for (let col: number = 0; col < mat[0].length; col++) {
            const value: number = mat[row][col]
            numToPos.set(value, new Pair(row, col))
        }
    }

    return numToPos
}

function checkRow(row: number, mat: number[][]): boolean {
    for (let col: number = 0; col < mat[0].length; col++) {
        if (mat[row][col] > 0) {
            return false
        }
    }

    return true
}

function checkColumn(col: number, mat: number[][]): boolean {
    for (let row: number = 0; row < mat.length; row++) {
        if (mat[row][col] > 0) {
            return false
        }
    }

    return true
}

class Pair<T, U> {
    constructor(readonly key: T, readonly value: U) {
    }
}
