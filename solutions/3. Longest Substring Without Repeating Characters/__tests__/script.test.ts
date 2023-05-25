import {lengthOfLongestSubstring} from '../script'

describe('3. Longest Substring Without Repeating Characters', (): void => {
    it('One', (): void => {
        expect(lengthOfLongestSubstring("bbbbb"))
            .toStrictEqual(1);
    });

    it('Several', (): void => {
        expect(lengthOfLongestSubstring("abcabcbb"))
            .toStrictEqual(3);
    });

    it('Many', (): void => {
        expect(lengthOfLongestSubstring("pwwkew"))
            .toStrictEqual(3);
    });
})
