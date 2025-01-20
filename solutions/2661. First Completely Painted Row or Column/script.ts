export {firstCompleteIndex}

function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const numToPos: Map<number, Position<number, number>> = buildPositions(mat)

    for (let i = 0; i < arr.length; i++) {
        const num: number = arr[i]
        const position: Position<number, number> = numToPos.get(num)!
        mat[position.row][position.column] = -mat[position.row][position.column]

        if (checkRow(position.row, mat) || checkColumn(position.column, mat)) {
            return i
        }
    }

    return -1
}

function buildPositions(mat: number[][]): Map<number, Position<number, number>> {
    const numToPos: Map<number, Position<number, number>> = new Map<number, Position<number, number>>()

    for (let row: number = 0; row < mat.length; row++) {
        for (let col: number = 0; col < mat[0].length; col++) {
            const value: number = mat[row][col]
            numToPos.set(value, new Position(row, col))
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

class Position<T, U> {
    constructor(readonly row: T, readonly column: U) {
    }
}
