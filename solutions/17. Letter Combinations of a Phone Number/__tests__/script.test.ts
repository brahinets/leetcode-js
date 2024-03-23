import {letterCombinations} from '../script'

describe('17. Letter Combinations of a Phone Number', (): void => {
    it('Unsupported character', (): void => {
        expect(() => letterCombinations("abc"))
            .toThrow("Unsupported digit")
    })

    it('Zero combination', (): void => {
        expect(letterCombinations(""))
            .toStrictEqual([])
    })

    it('Duplicated character', (): void => {
        expect(letterCombinations("22"))
            .toStrictEqual(["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"])
    })

    it('Few combinations', (): void => {
        expect(letterCombinations("2"))
            .toStrictEqual(["a", "b", "c"])
    })

    it('Many combination', (): void => {
        expect(letterCombinations("23"))
            .toStrictEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    })
})
