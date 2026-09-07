import {distinctSubsequencesII} from '../script'

describe('940. Distinct Subsequences II', (): void => {

    it('all distinct characters', (): void => {
        expect(distinctSubsequencesII('abc'))
            .toBe(7)
    })

    it('one repeated character', (): void => {
        expect(distinctSubsequencesII('aba'))
            .toBe(6)
    })

    it('same character repeated multiple times', (): void => {
        expect(distinctSubsequencesII('aaa'))
            .toBe(3)
    })

    it('single character', (): void => {
        expect(distinctSubsequencesII('a'))
            .toBe(1)
    })

    it('long string requiring modulo arithmetic', (): void => {
        const longString: string = 'ab'.repeat(1000)

        expect(distinctSubsequencesII(longString))
            .toBe(694708213)
    })
})
