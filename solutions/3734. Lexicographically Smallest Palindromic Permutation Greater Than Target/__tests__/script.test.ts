import { lexPalindromicPermutation } from '../script'

describe('3734. Lexicographically Smallest Palindromic Permutation Greater Than Target', (): void => {
    it('branch point falls before the middle of the string', (): void => {
        expect(lexPalindromicPermutation('baba', 'abba')).toBe('baab')
    })

    it('no palindromic permutation exceeds the target', (): void => {
        expect(lexPalindromicPermutation('baba', 'bbaa')).toBe('')
    })

    it('source string has no palindromic permutation at all', (): void => {
        expect(lexPalindromicPermutation('abc', 'abb')).toBe('')
    })

    it('only one palindromic permutation exists and it exceeds the target', (): void => {
        expect(lexPalindromicPermutation('aac', 'abb')).toBe('aca')
    })

    it('single valid palindromic permutation equals the target', (): void => {
        expect(lexPalindromicPermutation('aaa', 'aaa')).toBe('')
    })

    it('two distinct letters cannot form any palindrome', (): void => {
        expect(lexPalindromicPermutation('ab', 'aa')).toBe('')
    })

    it('only possible palindrome is lexicographically smaller than the target', (): void => {
        expect(lexPalindromicPermutation('aa', 'ab')).toBe('')
    })

    it('large input completes efficiently', (): void => {
        const s: string = 'a'.repeat(298) + 'z'.repeat(2)
        const target: string = 'a'.repeat(300)

        expect(lexPalindromicPermutation(s, target)).toBe(
            'a'.repeat(149) + 'zz' + 'a'.repeat(149)
        )
    })
})
