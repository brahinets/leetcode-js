import {arrayOf} from '../../common/array-factories'

export {winnerSquareGame}

function winnerSquareGame(numberOfStones: number): boolean {
    const canCurrentPlayerWin: boolean[] = arrayOf<boolean>(false, numberOfStones + 1)

    for (let remainingStones: number = 1; remainingStones <= numberOfStones; remainingStones++) {
        canCurrentPlayerWin[remainingStones] = hasWinningMove(remainingStones, canCurrentPlayerWin)
    }

    return canCurrentPlayerWin[numberOfStones]
}

function hasWinningMove(remainingStones: number, canCurrentPlayerWin: readonly boolean[]): boolean {
    for (let squareRoot: number = 1; squareRoot * squareRoot <= remainingStones; squareRoot++) {
        if (!canCurrentPlayerWin[remainingStones - squareRoot * squareRoot]) {
            return true
        }
    }

    return false
}
