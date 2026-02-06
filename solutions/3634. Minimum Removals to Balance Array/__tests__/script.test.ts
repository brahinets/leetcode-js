import { minRemoval } from '../script'

describe('3634. Minimum Removals to Balance Array', (): void => {
    it('Remove one outlier to make max <= k*min', (): void => {
        expect(minRemoval([2, 1, 5], 2))
            .toBe(1)
    })

    it('Remove both extremes to balance the array', (): void => {
        expect(minRemoval([1, 6, 2, 9], 3))
            .toBe(2)
    })

    it('Already balanced array requires no removals', (): void => {
        expect(minRemoval([4, 6], 2))
            .toBe(0)
    })

    it('Single element is always balanced', (): void => {
        expect(minRemoval([5], 1))
            .toBe(0)
    })

    it('Identical elements are always balanced', (): void => {
        expect(minRemoval([3, 3, 3, 3], 1))
            .toBe(0)
    })

    it('Large k allows wide range of values', (): void => {
        expect(minRemoval([1, 100, 50, 25], 100))
            .toBe(0)
    })

    it('k=1 requires keeping only equal elements', (): void => {
        expect(minRemoval([1, 2, 3], 1))
            .toBe(2)
    })
})
