import {buddyStrings} from '../script'

describe('859. Buddy Strings', (): void => {
    it('Can swap', (): void => {
        expect(buddyStrings("ab", "ba"))
            .toBe(true);
    });

    it('Cannot swap, will break equality', (): void => {
        expect(buddyStrings("ab", "ab"))
            .toBe(false);
    });

    it('Cannot swap, different length', (): void => {
        expect(buddyStrings("aa", "aaa"))
            .toBe(false);
    });

    it('Cannot swap, will not break equality', (): void => {
        expect(buddyStrings("aa", "aa"))
            .toBe(true);
    });
})
