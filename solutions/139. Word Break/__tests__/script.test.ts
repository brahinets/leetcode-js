import {wordBreak} from '../script'

describe('139. Word Break', (): void => {
    it('No segments needed', (): void => {
        expect(wordBreak("", ["leetcode"]))
            .toBe(true);
    });

    it('Already segments', (): void => {
        expect(wordBreak("leetcode", ["leetcode"]))
            .toBe(true);
    });

    it('Combine all segments', (): void => {
        expect(wordBreak("leetcode", ["leet", "code"]))
            .toBe(true);
    });

    it('Combine all segments #2', (): void => {
        expect(wordBreak("aaaaaaa", ["aaaa", "aaa"]))
            .toBe(true);
    });

    it('Reuse segment', (): void => {
        expect(wordBreak("applepenapple", ["apple", "pen"]))
            .toBe(true);
    });

    it('Cannot build', (): void => {
        expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
            .toBe(false);
    });

    it('Cannot build #2', (): void => {
        expect(wordBreak("ccbb", ["bc", "cb"]))
            .toBe(false);
    });



    it('Heavy case', (): void => {
        expect(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))
            .toBe(false);
    });
})
