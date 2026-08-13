import {longestRepeating} from '../script'

describe('2213. Longest Substring of One Repeating Character', (): void => {
    it('sequence of updates gradually extends and splits runs', (): void => {
        expect(longestRepeating('babacc', 'bcb', [1, 3, 3]))
            .toEqual([3, 3, 4])
    })

    it('update creates a new run separate from an existing one', (): void => {
        expect(longestRepeating('abyzz', 'aa', [2, 1]))
            .toEqual([2, 3])
    })

    it('single character string', (): void => {
        expect(longestRepeating('a', 'b', [0]))
            .toEqual([1])
    })

    it('update merges two runs on both sides into one', (): void => {
        expect(longestRepeating('aabaa', 'a', [2]))
            .toEqual([5])
    })

    it('update on string boundary index', (): void => {
        expect(longestRepeating('aaab', 'a', [3]))
            .toEqual([4])
    })

    it('repeated queries at the same index track the latest character only', (): void => {
        expect(longestRepeating('abc', 'ab', [0, 0]))
            .toEqual([1, 2])
    })
})
