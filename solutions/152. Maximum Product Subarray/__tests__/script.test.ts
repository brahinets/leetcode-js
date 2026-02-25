import {maxProduct} from '../script'

describe('152. Maximum Product Subarray', (): void => {
    it('Mixed positive and negative numbers', (): void => {
        expect(maxProduct([2, 3, -2, 4]))
            .toBe(6)
    })

    it('All negative numbers', (): void => {
        expect(maxProduct([-2]))
            .toBe(-2)
    })

    it('Contains zero', (): void => {
        expect(maxProduct([-2, 0, -1]))
            .toBe(0)
    })

    it('Multiple negative numbers producing positive product', (): void => {
        expect(maxProduct([2, -5, -2, -4, 3]))
            .toBe(24)
    })

    it('Single positive number', (): void => {
        expect(maxProduct([4]))
            .toBe(4)
    })
})
