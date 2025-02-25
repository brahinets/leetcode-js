import {minDays} from '../script'

describe('1568. Minimum Number of Days to Disconnect Island', (): void => {

    it('Already disconnected', (): void => {
        expect(minDays([
            [1, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ])).toBe(0)
    })

    it('Split on two islands in one day', (): void => {
        expect(minDays([
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ])).toBe(1)
    })

    it('Split on two islands in many days', (): void => {
        expect(minDays([
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ])).toBe(2)
    })

    it('Grid of full water is also disconnected', (): void => {
        expect(minDays([[1, 1]]))
            .toBe(2)
    })
})
