import {maximumProfit} from '../script'

describe('3573. Best Time to Buy and Sell Stock V', (): void => {
    it('One', (): void => {
        expect(maximumProfit([1, 7, 9, 8, 2], 2))
            .toBe(14)
    })

    it('Two', (): void => {
        expect(maximumProfit([12, 16, 19, 19, 8, 1, 19, 13, 9], 3))
            .toBe(36)
    })
})
