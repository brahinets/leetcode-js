import {maxAbsoluteSum} from '../script'

describe('1749. Maximum Absolute Sum of Any Subarray', (): void => {
    it('One', (): void => {
        expect(maxAbsoluteSum([1, -3, 2, 3, -4]))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(maxAbsoluteSum([2, -5, 1, -4, 3, -2]))
            .toBe(8)
    })
})
