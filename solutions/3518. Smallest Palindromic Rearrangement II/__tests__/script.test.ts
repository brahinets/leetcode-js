import { smallestPalindrome } from '../script'

describe('3518. Smallest Palindromic Rearrangement II', (): void => {
    it('picks the second smallest rearrangement of an even length palindrome', (): void => {
        const s: string = 'abba'
        const k: number = 2

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('baab')
    })

    it('picks the smallest rearrangement when k is one', (): void => {
        const s: string = 'bacab'
        const k: number = 1

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('abcba')
    })

    it('gives an empty string when k exceeds the distinct rearrangements', (): void => {
        const s: string = 'aa'
        const k: number = 2

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('')
    })

    it('keeps a single character palindrome unchanged', (): void => {
        const s: string = 'z'
        const k: number = 1

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('z')
    })

    it('handles a palindrome made of one repeated letter', (): void => {
        const s: string = 'aaaa'
        const k: number = 1

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('aaaa')
    })

    it('gives an empty string for a single repeated letter with any k above one', (): void => {
        const s: string = 'aaaa'
        const k: number = 2

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('')
    })

    it('selects a middle rank among several distinct rearrangements', (): void => {
        const s: string = 'aabbbbaa'
        const k: number = 4

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('baabbaab')
    })

    it('gives an empty string when k is just above the distinct count', (): void => {
        const s: string = 'aabb'
        const k: number = 3

        const result: string = smallestPalindrome(s, k)

        expect(result).toBe('')
    })
})
