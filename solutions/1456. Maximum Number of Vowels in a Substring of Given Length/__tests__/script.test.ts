import {maxVowels} from '../script'

describe('1456. Maximum Number of Vowels in a Substring of Given Length', (): void => {
    it('Has equal', (): void => {
        expect(maxVowels("abciiidef", 3))
            .toBe(3)
    })

    it('Has more', (): void => {
        expect(maxVowels("aeiou", 2))
            .toBe(2)
    })

    it('Has less', (): void => {
        expect(maxVowels("leetcode", 3))
            .toBe(2)
    })

    it('Has less again', (): void => {
        expect(maxVowels("weallloveyou", 7))
            .toBe(4)
    })

    it('Has less more again', (): void => {
        expect(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33))
            .toBe(7)
    })
})
