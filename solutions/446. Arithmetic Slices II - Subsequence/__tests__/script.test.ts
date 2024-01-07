import {numberOfArithmeticSlices} from '../script'

describe('446. Arithmetic Slices II - Subsequence', (): void => {

    it('From different numbers', (): void => {
        expect(numberOfArithmeticSlices([2, 4, 6, 8, 10]))
            .toBe(7)
    })

    it('From same number', (): void => {
        expect(numberOfArithmeticSlices([7, 7, 7, 7, 7]))
            .toBe(16)
    })
})
