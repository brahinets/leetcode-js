import {getWordsInLongestSubsequence} from '../script'

describe('2901. Longest Unequal Adjacent Groups Subsequence II', (): void => {
    it('Multiple answers', (): void => {
        expect(getWordsInLongestSubsequence(["bab", "dab", "cab"], [1, 2, 2]))
            .toEqual(["bab", "dab"])
    })

    it('Unique answer', (): void => {
        expect(getWordsInLongestSubsequence(["a", "b", "c", "d"], [1, 2, 3, 4]))
            .toEqual(["a", "b", "c", "d"])
    })
})
