import {isSubsequence} from '../script'

describe('A subsequence verification', (): void => {
    it('`abc` is a subsequence of `ahbgdc`', (): void => {
        expect(isSubsequence("abc", "ahbgdc")).toBe(true);
    });

    it('`axc` is a subsequence of `ahbgdc`', (): void => {
        expect(isSubsequence("axc", "ahbgdc")).toBe(false);
    });
});

