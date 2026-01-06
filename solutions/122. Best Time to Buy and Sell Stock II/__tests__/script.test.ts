import {maxProfit} from '../script'

describe('122. Best Time to Buy and Sell Stock II', (): void => {
    it('Buy and Sell multiple times', (): void => {
        expect(maxProfit([7, 1, 5, 3, 6, 4]))
            .toBe(7)
    })

    it('Buy and Sell one time', (): void => {
        expect(maxProfit([1, 2, 3, 4, 5]))
            .toBe(4)
    })

    it('Buy and Sell zero times', (): void => {
        expect(maxProfit([7, 6, 4, 3, 1]))
            .toBe(0)
    })
})
