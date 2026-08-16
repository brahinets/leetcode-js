import {stoneGameIX} from '../script'

describe('2029. Stone Game IX', (): void => {
    it('one stone of each non-zero remainder lets Alice force a loss on Bob', (): void => {
        expect(stoneGameIX([2, 1]))
            .toBe(true)
    })

    it('single stone leaves no player at risk resulting in a draw', (): void => {
        expect(stoneGameIX([2]))
            .toBe(false)
    })

    it('balanced non-zero remainders with an odd zero-remainder count end in a draw', (): void => {
        expect(stoneGameIX([5, 1, 2, 4, 3]))
            .toBe(false)
    })

    it('mixing a zero-remainder stone with one of each other remainder ends in a draw', (): void => {
        expect(stoneGameIX([1, 2, 3]))
            .toBe(false)
    })

    it('odd zero-remainder count with a difference of exactly two still ends in a draw', (): void => {
        expect(stoneGameIX([1, 4, 7, 2, 3]))
            .toBe(false)
    })

    it('missing one non-zero remainder entirely forces Alice to lose the opening move', (): void => {
        expect(stoneGameIX([3, 6, 9]))
            .toBe(false)
    })

    it('large imbalance between non-zero remainders wins for Alice despite an odd zero-remainder count', (): void => {
        expect(stoneGameIX([1, 4, 7, 10, 3]))
            .toBe(true)
    })

    it('even zero-remainder count wins for Alice even with balanced non-zero remainders', (): void => {
        expect(stoneGameIX([3, 6, 1, 2]))
            .toBe(true)
    })
})
