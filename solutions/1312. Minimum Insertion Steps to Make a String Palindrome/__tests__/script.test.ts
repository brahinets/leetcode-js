import {minInsertions} from '../script'

describe('1312. Minimum Insertion Steps to Make a String Palindrome', (): void => {
    it('Nothing required', (): void => {
        expect(minInsertions("zzazz"))
            .toBe(0);
    });

    it('Insert in the middle', (): void => {
        expect(minInsertions("mbadm"))
            .toBe(2);
    });

    it('Insert in the middle 2', (): void => {
        expect(minInsertions("zjveiiwvc"))
            .toBe(5);
    });

    it('Insert in the end', (): void => {
        expect(minInsertions("leetcode"))
            .toBe(5);
    });
})