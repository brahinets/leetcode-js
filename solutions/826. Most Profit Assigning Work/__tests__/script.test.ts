import {maxProfitAssignment} from '../script'

describe('826. Most Profit Assigning Work', (): void => {

    it('Can earn', (): void => {
        expect(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]))
            .toBe(100)
    })

    it('Cannot earn due to ', (): void => {
        expect(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]))
            .toBe(0)
    })
})
