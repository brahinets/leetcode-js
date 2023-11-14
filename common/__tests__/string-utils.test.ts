import {isPalindrome} from "../string-utils";

describe('Palindrome check', (): void => {

    it('Empty string is a palindrome', (): void => {
        expect(isPalindrome(""))
            .toBe(true)
    })

    it('Short string is a palindrome', (): void => {
        expect(isPalindrome("a"))
            .toBe(true)
    })

    it('Short string not a palindrome', (): void => {
        expect(isPalindrome("ab"))
            .toBe(false)
    })

    it('Long odd-size string is a palindrome', (): void => {
        expect(isPalindrome("aba"))
            .toBe(true)
    })

    it('Long even-size string is a palindrome', (): void => {
        expect(isPalindrome("abba"))
            .toBe(true)
    })

    it('Long string not a palindrome', (): void => {
        expect(isPalindrome("abc"))
            .toBe(false)
    })

    it('Long string not a palindrome', (): void => {
        expect(isPalindrome(("abca")))
            .toBe(false)
    })
})
