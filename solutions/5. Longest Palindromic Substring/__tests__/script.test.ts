import {longestPalindrome} from '../script'

describe('5. Longest Palindromic Substring', (): void => {
    it('Start', (): void => {
        expect(longestPalindrome("babad"))
            .toBe("bab");
    });

    it('Middle', (): void => {
        expect(longestPalindrome("cbbd"))
            .toBe("bb");
    });

    it('End', (): void => {
        expect(longestPalindrome("cbbdb"))
            .toBe("bdb");
    });

    it('Full', (): void => {
        expect(longestPalindrome("cdbdc"))
            .toBe("cdbdc");
    });
})