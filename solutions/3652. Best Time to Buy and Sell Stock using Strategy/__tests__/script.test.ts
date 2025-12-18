import {maxProfit} from '../script'

describe('3652. Best Time to Buy and Sell Stock using Strategy', (): void => {
    it('One', (): void => {
        expect(maxProfit([4, 2, 8], [-1, 0, 1], 2))
            .toBe(10)
    })

    it('Two', (): void => {
        expect(maxProfit([5, 4, 3], [1, 1, 0], 2))
            .toBe(9)
    })
})
