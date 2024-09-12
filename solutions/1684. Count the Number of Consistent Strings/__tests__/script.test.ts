import {countConsistentStrings} from '../script'

describe('1684. Count the Number of Consistent Strings', (): void => {

    it('All strings are consistent', (): void => {
        expect(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]))
            .toBe(7)
    })

    it('Some strings are consistent', (): void => {
        expect(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]))
            .toBe(2)
    })

    it('Some strings are consistent #2', (): void => {
        expect(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]))
            .toBe(4)
    })
})
