import {smallestNumber} from '../script'

describe('3348. Smallest Divisible Digit Product II', (): void => {
    it('requires digit greater than current one at some position', (): void => {
        expect(smallestNumber('1234', 256))
            .toBe('1488')
    })

    it('number already satisfies the condition', (): void => {
        expect(smallestNumber('12355', 50))
            .toBe('12355')
    })

    it('divisor has a prime factor outside two three five seven', (): void => {
        expect(smallestNumber('11111', 26))
            .toBe('-1')
    })

    it('divisor of one is satisfied by the number itself', (): void => {
        expect(smallestNumber('25', 1))
            .toBe('25')
    })

    it('number contains a zero digit that must be replaced', (): void => {
        expect(smallestNumber('10', 5))
            .toBe('15')
    })

    it('minimal digit count exceeds the length of the number', (): void => {
        expect(smallestNumber('9', 256))
            .toBe('488')
    })

    it('no valid suffix exists within the same length so the number extends', (): void => {
        expect(smallestNumber('99', 49))
            .toBe('177')
    })
})
