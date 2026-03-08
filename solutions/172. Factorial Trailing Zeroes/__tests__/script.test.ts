import {trailingZeroes} from '../script'

describe('172. Factorial Trailing Zeroes', (): void => {

    it('no trailing zeroes', (): void => {
        expect(trailingZeroes(3)).toBe(0)
    })

    it('one trailing zero', (): void => {
        expect(trailingZeroes(5)).toBe(1)
    })

    it('two trailing zeroes', (): void => {
        expect(trailingZeroes(10)).toBe(2)
    })

    it('six trailing zeroes (25 contributes two factors of 5)', (): void => {
        expect(trailingZeroes(25)).toBe(6)
    })

    it('zero trailing zeroes', (): void => {
        expect(trailingZeroes(0)).toBe(0)
    })
})
