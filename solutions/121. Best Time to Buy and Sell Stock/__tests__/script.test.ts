import {maxProfit} from '../script'

describe('121. Best Time to Buy and Sell Stock', (): void => {
    it('Sell transactions can be done', (): void => {
        expect(maxProfit([7, 1, 5, 3, 6, 4]))
            .toBe(5)
    })

    it('No transactions can be done', (): void => {
        expect(maxProfit([7, 6, 4, 3, 1]))
            .toBe(0)
    })
})
