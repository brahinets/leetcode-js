import {countOfSubstrings} from '../script'

describe('3306. Count of Substrings Containing Every Vowel and K Consonants II', (): void => {
    it('No substring with every vowel', (): void => {
        expect(countOfSubstrings("aeioqq", 1))
            .toBe(0)
    })

    it('The only substring with every vowel', (): void => {
        expect(countOfSubstrings("aeiou", 0))
            .toBe(1)
    })

    it('Multiple substrings with every vowel', (): void => {
        expect(countOfSubstrings("ieaouqqieaouqq", 1))
            .toBe(3)
    })
})
