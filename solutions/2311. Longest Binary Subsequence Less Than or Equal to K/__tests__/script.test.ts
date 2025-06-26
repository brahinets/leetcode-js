import {longestSubsequence} from '../script'

describe('2311. Longest Binary Subsequence Less Than or Equal to K', (): void => {
    it('One', (): void => {
        expect(longestSubsequence("1001010", 5))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(longestSubsequence("00101001", 1))
            .toBe(6)
    })
})
