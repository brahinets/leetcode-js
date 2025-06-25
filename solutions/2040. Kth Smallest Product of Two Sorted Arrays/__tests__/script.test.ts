import {kthSmallestProduct} from '../script'

describe('2040. Kth Smallest Product of Two Sorted Arrays', (): void => {
    it('Positive product', (): void => {
        expect(kthSmallestProduct([2, 5], [3, 4], 2))
            .toBe(8)
    })

    it('Zero product', (): void => {
        expect(kthSmallestProduct([-4, -2, 0, 3], [2, 4], 6))
            .toBe(0)
    })

    it('Negative product', (): void => {
        expect(kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3))
            .toBe(-6)
    })
})
