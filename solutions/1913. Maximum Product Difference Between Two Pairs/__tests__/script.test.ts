import {maxProductDifference} from '../script'

describe('1913. Maximum Product Difference Between Two Pairs', (): void => {

    it('First', (): void => {
        expect(maxProductDifference([5, 6, 2, 7, 4]))
            .toBe(34)
    })

    it('Second', (): void => {
        expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8]))
            .toBe(64)
    })
})
