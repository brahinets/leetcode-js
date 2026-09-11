import { countUniqueThreeDigitEvenNumbers } from '../script'

describe('3483. Unique 3-Digit Even Numbers', (): void => {
    it('distinct digits form multiple even numbers', (): void => {
        expect(countUniqueThreeDigitEvenNumbers([1, 2, 3, 4]))
            .toBe(12)
    })

    it('leading zero excluded but repeated digit allowed twice', (): void => {
        expect(countUniqueThreeDigitEvenNumbers([0, 2, 2]))
            .toBe(2)
    })

    it('single repeated digit forms exactly one number', (): void => {
        expect(countUniqueThreeDigitEvenNumbers([6, 6, 6]))
            .toBe(1)
    })

    it('no even digits available', (): void => {
        expect(countUniqueThreeDigitEvenNumbers([1, 3, 5]))
            .toBe(0)
    })

    it('minimum length input with all zeros', (): void => {
        expect(countUniqueThreeDigitEvenNumbers([0, 0, 0]))
            .toBe(0)
    })

    it('maximum length input using every digit once', (): void => {
        expect(countUniqueThreeDigitEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
            .toBe(328)
    })
})
