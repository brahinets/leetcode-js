import {maxSumDivThree} from '../script'

describe('1262. Greatest Sum Divisible by Three\n', (): void => {
    it('Pick some numbers', (): void => {
        expect(maxSumDivThree([3, 6, 5, 1, 8]))
            .toBe(18)
    })

    it('Do not pick any number', (): void => {
        expect(maxSumDivThree([4]))
            .toBe(0)
    })

    it('Pick unique numbers', (): void => {
        expect(maxSumDivThree([1, 2, 3, 4, 4]))
            .toBe(12)
    })
})
