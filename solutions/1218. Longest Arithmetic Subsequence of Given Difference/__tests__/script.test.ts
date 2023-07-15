import {longestSubsequence} from '../script'

describe('1218. Longest Arithmetic Subsequence of Given Difference', (): void => {
    it('Entire array is sequence', (): void => {
        expect(longestSubsequence([1, 2, 3, 4], 1))
            .toBe(4);
    });

    it('One element is decreasing sequence', (): void => {
        expect(longestSubsequence([3, 4, -3, -2, -4], -5))
            .toBe(2);
    });

    it('Sub-array is increasing sequence', (): void => {
        expect(longestSubsequence([1, 4, 7], 3))
            .toBe(3);
    });

    it('Sub-array is decreasing sequence', (): void => {
        expect(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2))
            .toBe(4);
    });
});
