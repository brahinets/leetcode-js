import { smallestSubsequence } from '../script'

describe('1081. Smallest Subsequence of Distinct Characters', (): void => {
    it('returns "abc" for "bcabc"', (): void => {
        const s: string = 'bcabc'
        const expected: string = 'abc'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('returns "acdb" for "cbacdcbc"', (): void => {
        const s: string = 'cbacdcbc'
        const expected: string = 'acdb'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('handles single character string', (): void => {
        const s: string = 'a'
        const expected: string = 'a'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('handles all same characters', (): void => {
        const s: string = 'aaaa'
        const expected: string = 'a'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('returns lexicographically smallest for reverse order input', (): void => {
        const s: string = 'dcba'
        const expected: string = 'dcba'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('handles already sorted input', (): void => {
        const s: string = 'abcd'
        const expected: string = 'abcd'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('handles two unique characters', (): void => {
        const s: string = 'bab'
        const expected: string = 'ab'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })

    it('handles complex interleaving pattern', (): void => {
        const s: string = 'ecbacba'
        const expected: string = 'eacb'

        const result: string = smallestSubsequence(s)

        expect(result).toBe(expected)
    })
})
