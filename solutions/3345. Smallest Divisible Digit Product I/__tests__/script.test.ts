import {smallestNumber} from '../script'

describe('3345. Smallest Divisible Digit Product I', (): void => {
    it('digit product already zero', (): void => {
        expect(smallestNumber(10, 2))
            .toBe(10)
    })

    it('next number required', (): void => {
        expect(smallestNumber(15, 3))
            .toBe(16)
    })

    it('single digit number', (): void => {
        expect(smallestNumber(3, 1))
            .toBe(3)
    })
})
