import {longestSubsequenceRepeatedK} from '../script'

describe('2014. Longest Subsequence Repeated k Times', (): void => {
    it('Long subsequence repeated', (): void => {
        expect(longestSubsequenceRepeatedK("letsleetcode", 2))
            .toBe("let")
    })

    it('Short subsequence repeated', (): void => {
        expect(longestSubsequenceRepeatedK("bb", 2))
            .toBe("b")
    })

    it('No subsequence repeated', (): void => {
        expect(longestSubsequenceRepeatedK("ab", 2))
            .toBe("")
    })
})
