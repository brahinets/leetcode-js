import { minimumChanges } from '../script'

describe('2911. Minimum Changes to Make K Semi-palindromes', (): void => {
    it('splits into an already valid piece and a pair needing one change', (): void => {
        const input: string = 'abcac'
        const substringCount: number = 2

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(1)
    })

    it('splits evenly where each half needs a single change', (): void => {
        const input: string = 'abcdef'
        const substringCount: number = 2

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(2)
    })

    it('needs no changes when every piece is already semipalindromic', (): void => {
        const input: string = 'aabbaa'
        const substringCount: number = 3

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(0)
    })

    it('needs no changes when the whole string is already a palindrome', (): void => {
        const input: string = 'abba'
        const substringCount: number = 1

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(0)
    })

    it('treats a repeated-block string as semipalindromic without changes', (): void => {
        const input: string = 'abab'
        const substringCount: number = 1

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(0)
    })

    it('applies a single change to the minimum-length piece', (): void => {
        const input: string = 'ab'
        const substringCount: number = 1

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(1)
    })

    it('reduces a prime-length piece to plain palindrome cost', (): void => {
        const input: string = 'abc'
        const substringCount: number = 1

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(1)
    })

    it('forces each pair to differ under the maximum piece count', (): void => {
        const input: string = 'abcd'
        const substringCount: number = 2

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(2)
    })

    it('needs no changes when every letter is identical', (): void => {
        const input: string = 'aaaaaaaa'
        const substringCount: number = 4

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(0)
    })

    it('splits a repeated pattern across two semipalindromic pieces', (): void => {
        const input: string = 'abcabc'
        const substringCount: number = 2

        const result: number = minimumChanges(
            input,
            substringCount
        )

        expect(result).toBe(2)
    })
})
