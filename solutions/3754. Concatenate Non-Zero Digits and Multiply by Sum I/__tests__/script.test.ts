import {sumAndMultiply} from '../script'

describe('3754. Concatenate Non-Zero Digits and Multiply by Sum I', (): void => {

    it('interleaved zero digits', (): void => {
        expect(sumAndMultiply(10203004))
            .toBe(12340)
    })

    it('single non-zero digit followed by zeros', (): void => {
        expect(sumAndMultiply(1000))
            .toBe(1)
    })

    it('all digits are zero', (): void => {
        expect(sumAndMultiply(0))
            .toBe(0)
    })

    it('no zero digits present', (): void => {
        expect(sumAndMultiply(123))
            .toBe(123 * 6)
    })

    it('largest allowed value', (): void => {
        expect(sumAndMultiply(1000000000))
            .toBe(1)
    })
})
