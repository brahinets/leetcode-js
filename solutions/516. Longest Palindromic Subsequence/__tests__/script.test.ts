import {longestPalindromeSubseq} from '../script'

describe('5. Longest Palindromic Substring', (): void => {
    it('Keep as is', (): void => {
        expect(longestPalindromeSubseq("cbbd")).toBe(2);
    });
});