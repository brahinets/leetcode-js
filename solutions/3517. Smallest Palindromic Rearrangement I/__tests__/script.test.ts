import { smallestPalindrome } from '../script'

describe('3517. Smallest Palindromic Rearrangement I', (): void => {
    it('single character', (): void => {
        const s: string = 'z'

        const result: string = smallestPalindrome(s)

        expect(result).toBe('z')
    })

    it('odd length with repeated letters', (): void => {
        const s: string = 'babab'

        const result: string = smallestPalindrome(s)

        expect(result).toBe('abbba')
    })

    it('even length with multiple distinct letters', (): void => {
        const s: string = 'daccad'

        const result: string = smallestPalindrome(s)

        expect(result).toBe('acddca')
    })

    it('already sorted palindrome stays unchanged', (): void => {
        const s: string = 'aa'

        const result: string = smallestPalindrome(s)

        expect(result).toBe('aa')
    })

    it('single letter repeated an odd number of times', (): void => {
        const s: string = 'aaa'

        const result: string = smallestPalindrome(s)

        expect(result).toBe('aaa')
    })

    it('empty middle when all counts are even', (): void => {
        const s: string = 'baab'

        const result: string = smallestPalindrome(s)

        expect(result).toBe('abba')
    })
})
