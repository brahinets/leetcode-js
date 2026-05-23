import {minMoves} from '../script'

describe('1674. Minimum Moves to Make Array Complementary', (): void => {
    it('one move to equalize pair sums', (): void => {
        expect(minMoves([1, 2, 4, 3], 4))
            .toBe(1)
    })

    it('both elements must change due to limit constraint', (): void => {
        expect(minMoves([1, 2, 2, 1], 2))
            .toBe(2)
    })

    it('already complementary', (): void => {
        expect(minMoves([1, 2, 1, 2], 2))
            .toBe(0)
    })

    it('single pair', (): void => {
        expect(minMoves([1, 1], 1))
            .toBe(0)
    })

    it('single pair requiring two moves', (): void => {
        expect(minMoves([1, 3], 3))
            .toBe(0)
    })

    it('all same values', (): void => {
        expect(minMoves([2, 2, 2, 2], 3))
            .toBe(0)
    })
})
