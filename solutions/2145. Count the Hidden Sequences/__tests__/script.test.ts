import {numberOfArrays} from '../script'

describe('2145. Count the Hidden Sequences', (): void => {
    it('Few', (): void => {
        expect(numberOfArrays([1, -3, 4], 1, 6))
            .toBe(2)
    })

    it('Many', (): void => {
        expect(numberOfArrays([3, -4, 5, 1, -2], -4, 5))
            .toBe(4)
    })

    it('There are no possible hidden sequences', (): void => {
        expect(numberOfArrays([4, -7, 2], 3, 6))
            .toBe(0)
    })
})
