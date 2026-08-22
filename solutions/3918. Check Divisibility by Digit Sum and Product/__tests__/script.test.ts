import {isDivisible} from '../script'

describe('3918. Check Divisibility by Digit Sum and Product', (): void => {
    it('number divisible by sum of digit sum and digit product', (): void => {
        expect(isDivisible(99))
            .toBe(true)
    })

    it('number not divisible by sum of digit sum and digit product', (): void => {
        expect(isDivisible(23))
            .toBe(false)
    })

    it('single digit number is never divisible since the total doubles the number', (): void => {
        expect(isDivisible(5))
            .toBe(false)
    })

    it('number containing a zero digit relies only on the digit sum', (): void => {
        expect(isDivisible(10))
            .toBe(true)
    })

    it('minimum constraint value of one', (): void => {
        expect(isDivisible(1))
            .toBe(false)
    })
})
