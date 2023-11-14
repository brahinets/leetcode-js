import {countPalindromicSubsequence} from '../script'

describe('1930. Unique Length-3 Palindromic Subsequences', (): void => {

    it('No in empty string', (): void => {
        expect(countPalindromicSubsequence(""))
            .toBe(0)
    })

    it('No in string', (): void => {
        expect(countPalindromicSubsequence("adc"))
            .toBe(0)
    })

    it('Few palindromic', (): void => {
        expect(countPalindromicSubsequence("aabca"))
            .toBe(3)
    })

    it('Not count duplicates', (): void => {
        expect(countPalindromicSubsequence("bbcbaba"))
            .toBe(4)
    })
})
