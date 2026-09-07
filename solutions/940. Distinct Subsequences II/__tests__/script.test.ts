import { distinctSubseqII } from '../script'

describe('940. Distinct Subsequences II', (): void => {
    it('all distinct characters', (): void => {
        expect(distinctSubseqII('abc')).toBe(7)
    })

    it('one repeated character', (): void => {
        expect(distinctSubseqII('aba')).toBe(6)
    })

    it('same character repeated multiple times', (): void => {
        expect(distinctSubseqII('aaa')).toBe(3)
    })

    it('single character', (): void => {
        expect(distinctSubseqII('a')).toBe(1)
    })

    it('long string requiring modulo arithmetic', (): void => {
        const longString: string = 'ab'.repeat(1000)

        expect(distinctSubseqII(longString)).toBe(694708213)
    })
})
