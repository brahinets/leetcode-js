import {longestPalindrome} from '../script'

describe('2131. Longest Palindrome by Concatenating Two Letter Words', (): void => {
    it('Multiple', (): void => {
        expect(longestPalindrome(["lc", "cl", "gg"]))
            .toBe(6)
    })

    it('Multiple #2', (): void => {
        expect(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]))
            .toBe(8)
    })

    it('Few', (): void => {
        expect(longestPalindrome(["cc", "ll", "xx"]))
            .toBe(2)
    })

    it('None', (): void => {
        expect(longestPalindrome(["ab", "cd"]))
            .toBe(0)
    })
})
