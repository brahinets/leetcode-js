import {longestPalindrome} from '../script'

describe('409. Longest Palindrome', (): void => {

    it('One letter palindrome', (): void => {
        expect(longestPalindrome("a"))
            .toBe(1)
    })

    it('Multiple letters palindrome', (): void => {
        expect(longestPalindrome("abccccdd",))
            .toBe(7)
    })
})
