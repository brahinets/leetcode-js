import {beautifulSubsets} from '../script'

describe('2597. The Number of Beautiful Subsets', (): void => {

    it('The only beautiful subset', (): void => {
        expect(beautifulSubsets([1], 1))
            .toBe(1)
    })

    it('Should exclude subsets with too small delta', (): void => {
        expect(beautifulSubsets([2, 4, 6], 2))
            .toBe(4)
    })

    it('Should handle non-consecutive differences ', (): void => {
        expect(beautifulSubsets([10, 4, 5, 7, 2, 1], 3))
            .toBe(23)
    })
})
