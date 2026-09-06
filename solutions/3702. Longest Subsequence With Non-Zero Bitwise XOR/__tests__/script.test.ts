import {longestSubsequence} from '../script'

describe('3702. Longest Subsequence With Non-Zero Bitwise XOR', (): void => {
    it('total xor of full array is already non-zero', (): void => {
        expect(longestSubsequence([2, 3, 4]))
        .toEqual(3)
    })

    it('total xor of full array is zero but a non-zero element exists', (): void => {
        expect(longestSubsequence([1, 2, 3]))
        .toEqual(2)
    })

    it('all elements are zero', (): void => {
        expect(longestSubsequence([0, 0, 0]))
        .toEqual(0)
    })

    it('single non-zero element', (): void => {
        expect(longestSubsequence([5]))
        .toEqual(1)
    })

    it('single zero element', (): void => {
        expect(longestSubsequence([0]))
        .toEqual(0)
    })

    it('mixture of zeros and non-zeros with total xor zero', (): void => {
        expect(longestSubsequence([0, 5, 5]))
        .toEqual(2)
    })
})
