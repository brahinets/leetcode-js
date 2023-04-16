import {longestPalindromeSubseq} from '../script'

describe('516. Longest Palindromic Subsequence', (): void => {
    it('Keep as is', (): void => {
        expect(longestPalindromeSubseq("cbbd")).toBe(2);
    });

    it('Remove one char', (): void => {
        expect(longestPalindromeSubseq("bbd")).toBe(2);
    });

    it('Remove multiple chars', (): void => {
        expect(longestPalindromeSubseq("abcabcabcabc")).toBe(7);
    });
});