import {getLongestSubsequence} from '../script'

describe('2900. Longest Unequal Adjacent Groups Subsequence I', (): void => {
    it('One', (): void => {
        expect(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]))
            .toEqual(["e", "b"])
    })


    it('Two', (): void => {
        expect(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]))
            .toEqual(["a", "b", "c"])
    })
})
