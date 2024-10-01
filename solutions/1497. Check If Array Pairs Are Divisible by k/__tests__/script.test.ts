import {canArrange} from '../script'

describe('1497. Check If Array Pairs Are Divisible by k', (): void => {
    it('All used', (): void => {
        expect(canArrange([1, 2, 3, 4, 6, 7, 8, 9], 5))
            .toBe(true)
    })

    it('Some used', (): void => {
        expect(canArrange([1, 2, 3, 4, 5, 6], 7))
            .toBe(true)
    })

    it('No', (): void => {
        expect(canArrange([1, 2, 3, 4, 5, 6], 10))
            .toBe(false)
    })
})
