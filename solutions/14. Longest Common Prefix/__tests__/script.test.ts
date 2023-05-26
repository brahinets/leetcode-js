import {longestCommonPrefix} from '../script'

describe('14. Longest Common Prefix', (): void => {
    it('No strings', (): void => {
        expect(longestCommonPrefix([]))
            .toBe("");
    });

    it('No common', (): void => {
        expect(longestCommonPrefix(["dog", "racecar", "car"]))
            .toBe("");
    });

    it('Has common', (): void => {
        expect(longestCommonPrefix(["flower", "flow", "flight"]))
            .toBe("fl");
    });
})