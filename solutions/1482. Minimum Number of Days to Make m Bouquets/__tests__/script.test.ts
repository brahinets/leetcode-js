import {minDays} from '../script'

describe('1482. Minimum Number of Days to Make m Bouquets', (): void => {

    it('Enough one bloom', (): void => {
        expect(minDays([1, 10, 3, 10, 2], 3, 1))
            .toBe(3)
    })

    it('Not enough flowers', (): void => {
        expect(minDays([1, 10, 3, 10, 2], 3, 2))
            .toBe(-1)
    })

    it('Need wait next bloom', (): void => {
        expect(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3))
            .toBe(12)
    })
})
