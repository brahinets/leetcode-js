import {longestCommonSubsequence} from '../script'

describe('1143. Longest Common Subsequence', (): void => {

    it('No common subsequence', (): void => {
        expect(longestCommonSubsequence("abc", "def"))
            .toBe(0)
    })

    it('Part of string is a subsequence of another', (): void => {
        expect(longestCommonSubsequence("abcde", "qbcq"))
            .toBe(2)
    })

    it('One of strings is a subsequence of another', (): void => {
        expect(longestCommonSubsequence("abcde", "ace"))
            .toBe(3)
    })

    it('Full string is a subsequence', (): void => {
        expect(longestCommonSubsequence("abc", "abc"))
            .toBe(3)
    })
})
