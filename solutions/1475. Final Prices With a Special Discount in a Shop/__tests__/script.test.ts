import {finalPrices} from '../script'

describe('1475. Final Prices With a Special Discount in a Shop', (): void => {
    it('No discount', (): void => {
        expect(finalPrices([1, 2, 3, 4, 5]))
            .toEqual([1, 2, 3, 4, 5])
    })

    it('Some discounts', (): void => {
        expect(finalPrices([8, 4, 6, 2, 3]))
            .toEqual([4, 2, 4, 2, 3])
    })

    it('Many discounts', (): void => {
        expect(finalPrices([10, 1, 1, 6]))
            .toEqual([9, 0, 1, 6])
    })
})
