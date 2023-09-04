import {count} from "../../common/array-utils"

export {isValidSudoku}

const EMPTY: string = "."

function isValidSudoku(board: string[][]): boolean {
    return validate(board, 1, 9)
        && validate(board, 9, 1)
        && validate(board, 3, 3)
}

function validate(board: string[][], stepRow: number, stepCol: number): boolean {
    for (let row: number = 0; row < board.length; row += stepRow) {
        for (let col: number = 0; col < board[0].length; col += stepCol) {
            const block: string[] = collectBlock(board, row, stepRow, col, stepCol)

            if (invalidBlock(block)) {
                return false
            }
        }
    }

    return true
}

function collectBlock(board: string[][], row: number, stepRow: number, col: number, stepCol: number): string[] {
    return board.reduce((blockValues: string[], rowValues: string[], index: number): string[] => {
        if (index >= row && index < row + stepRow) {
            blockValues.push(...rowValues.slice(col, col + stepCol))
        }

        return blockValues
    }, [])
}

function invalidBlock(block: string[]): boolean {
    const counts: Map<string, number> = count(block)

    for (const [char, count] of counts) {
        if (char !== EMPTY && count > 1) {
            return true
        }
    }

    return false
}
