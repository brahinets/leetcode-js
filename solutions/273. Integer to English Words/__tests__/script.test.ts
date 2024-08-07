import {numberToWords} from '../script'

describe('273. Integer to English Words', (): void => {
    it('Unsupported', (): void => {
        expect(numberToWords(-1))
            .toBe("")
    })

    it('Zero', (): void => {
        expect(numberToWords(0))
            .toBe("Zero")
    })

    it('Singular', (): void => {
        expect(numberToWords(2))
            .toBe("Two")
    })

    it('Decimals', (): void => {
        expect(numberToWords(12))
            .toBe("Twelve")
    })

    it('Hundreds', (): void => {
        expect(numberToWords(123))
            .toBe("One Hundred Twenty Three")
    })

    it('Thousands', (): void => {
        expect(numberToWords(12345))
            .toBe("Twelve Thousand Three Hundred Forty Five")
    })

    it('Millions', (): void => {
        expect(numberToWords(1234567))
            .toBe("One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven")
    })
})
