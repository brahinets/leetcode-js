import {threeConsecutiveOdds} from '../script'

describe('1550. Three Consecutive Odds', (): void => {
    it('No. Long array', (): void => {
        expect(threeConsecutiveOdds([2, 6, 4, 1]))
            .toBe(false)
    })

    it('No. Equal array', (): void => {
        expect(threeConsecutiveOdds([2, 6, 1]))
            .toBe(false)
    })

    it('No. Too short array', (): void => {
        expect(threeConsecutiveOdds([2, 6]))
            .toBe(false)
    })

    it('Yes. Long array', (): void => {
        expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]))
            .toBe(true)
    })

    it('Yes. Equal array', (): void => {
        expect(threeConsecutiveOdds([5, 7, 23]))
            .toBe(true)
    })
})
