import {maxDotProduct} from '../script'

describe('1458. Max Dot Product of Two Subsequences', (): void => {
    it('One', (): void => {
        expect(maxDotProduct([2, 1, -2, 5], [3, 0, -6]))
            .toBe(18)
    })

    it('Two', (): void => {
        expect(maxDotProduct([3, -2], [2, -6, 7]))
            .toBe(21)
    })

    it('Three', (): void => {
        expect(maxDotProduct([-1, -1], [1, 1]))
            .toBe(-1)
    })
})
