import {totalCost} from '../script'

describe('2462. Total Cost to Hire K Workers', (): void => {
    it('Hire some workers', (): void => {
        expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4))
            .toBe(11)
    })

    it('Hire few more workers', (): void => {
        expect(totalCost([31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], 11, 2))
            .toBe(423)
    })

    it('Hire some many workers', (): void => {
        expect(totalCost([50, 80, 34, 9, 86, 20, 67, 94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58], 7, 12))
            .toBe(95)
    })

    it('Hire all workers', (): void => {
        expect(totalCost([1, 2, 4, 1], 3, 3))
            .toBe(4)
    })
})
