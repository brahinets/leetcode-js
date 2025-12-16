import {maxProfit} from '../script'

describe('3562. Maximum Profit from Trading Stocks with Discounts', (): void => {
    it('One', (): void => {
        expect(maxProfit(2, [1, 2], [4, 3], [[1, 2]], 3))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(maxProfit(2, [3, 4], [5, 8], [[1, 2]], 4))
            .toBe(4)
    })

    it('Three', (): void => {
        expect(maxProfit(3, [4, 6, 8], [7, 9, 11], [[1, 2], [1, 3]], 10))
            .toBe(10)
    })
})
