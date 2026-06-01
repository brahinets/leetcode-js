import { minimumCost } from '../script'

describe('2144. Minimum Cost of Buying Candies With Discount', (): void => {
    it('gives free every third candy when sorted descending', (): void => {
        expect(minimumCost([1, 2, 3])).toBe(5)
    })

    it('handles multiple free candies', (): void => {
        expect(minimumCost([6, 5, 7, 9, 2, 2])).toBe(23)
    })

    it('single candy has no discount', (): void => {
        expect(minimumCost([5])).toBe(5)
    })

    it('two candies have no discount', (): void => {
        expect(minimumCost([5, 3])).toBe(8)
    })

    it('exactly three candies gives cheapest free', (): void => {
        expect(minimumCost([1, 2, 3])).toBe(5)
    })
})
