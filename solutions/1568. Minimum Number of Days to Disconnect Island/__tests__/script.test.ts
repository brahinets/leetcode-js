import {minDays} from '../script'

describe('1568. Minimum Number of Days to Disconnect Island', (): void => {

    it('Split on two islands', (): void => {
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
