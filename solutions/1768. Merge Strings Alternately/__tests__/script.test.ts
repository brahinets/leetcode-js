import {mergeAlternately} from '../script'

describe('1768. Merge Strings Alternately', (): void => {
    it('Equal length', (): void => {
        expect(mergeAlternately("abc", "pqr"))
            .toStrictEqual("apbqcr");
    });

    it('First shorter', (): void => {
        expect(mergeAlternately("ab", "pqrs"))
            .toStrictEqual("apbqrs");
    });

    it('Second shorter', (): void => {
        expect(mergeAlternately("abcd", "pq"))
            .toStrictEqual("apbqcd");
    });
})
