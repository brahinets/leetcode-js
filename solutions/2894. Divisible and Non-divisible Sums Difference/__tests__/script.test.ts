import {differenceOfSums} from '../script'

describe('2894. Divisible and Non-divisible Sums Difference', (): void => {
    it('Have both', (): void => {
        expect(differenceOfSums(10, 3))
            .toBe(19)
    })

    it('Have only one', (): void => {
        expect(differenceOfSums(5, 6))
            .toBe(15)
    })

    it('Negative', (): void => {
        expect(differenceOfSums(5, 1))
            .toBe(-15)
    })
})
