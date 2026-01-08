import {maxProfit} from '../script'

describe('123. Best Time to Buy and Sell Stock III', (): void => {
    it('Buy and Sell multiple times', (): void => {
        expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
            .toBe(6)
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
