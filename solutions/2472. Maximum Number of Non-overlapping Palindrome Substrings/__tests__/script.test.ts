import {maxPalindromes} from '../script'

describe('2472. Maximum Number of Non-overlapping Palindrome Substrings', (): void => {
    it('two disjoint palindromes of minimum length', (): void => {
        expect(maxPalindromes('abaccdbbd', 3))
            .toBe(2)
    })

    it('no palindrome reaches the minimum length', (): void => {
        expect(maxPalindromes('adbcda', 2))
            .toBe(0)
    })

    it('single character string equal to minimum length', (): void => {
        expect(maxPalindromes('a', 1))
            .toBe(1)
    })

    it('entire string is one palindrome shorter than any split', (): void => {
        expect(maxPalindromes('aaaa', 4))
            .toBe(1)
    })

    it('overlapping palindrome candidates prefer smaller pieces for more selections', (): void => {
        expect(maxPalindromes('aaaaa', 2))
            .toBe(2)
    })

    it('every character identical allows many minimum length selections', (): void => {
        expect(maxPalindromes('aaaaaa', 2))
            .toBe(3)
    })
})
