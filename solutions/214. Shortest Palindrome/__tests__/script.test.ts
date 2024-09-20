import {shortestPalindrome} from '../script'

describe('214. Shortest Palindrome', (): void => {
    it('Add nothing', (): void => {
        expect(shortestPalindrome("aacecaa"))
            .toBe("aacecaa")
    })

    it('Add one character', (): void => {
        expect(shortestPalindrome("aacecaaa"))
            .toBe("aaacecaaa")
    })

    it('Add several character', (): void => {
        expect(shortestPalindrome("abcd"))
            .toBe("dcbabcd")
    })
})
