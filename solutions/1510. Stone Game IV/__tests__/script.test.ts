import {winnerSquareGame} from '../script'

describe('1510. Stone Game IV', (): void => {
    it('single stone leaves no move for the opponent', (): void => {
        expect(winnerSquareGame(1))
            .toBe(true)
    })

    it('only one stone can be removed at a time forcing a loss', (): void => {
        expect(winnerSquareGame(2))
            .toBe(false)
    })

    it('pile is already a perfect square', (): void => {
        expect(winnerSquareGame(4))
            .toBe(true)
    })

    it('no removal sequence leads to a win', (): void => {
        expect(winnerSquareGame(7))
            .toBe(false)
    })
})
