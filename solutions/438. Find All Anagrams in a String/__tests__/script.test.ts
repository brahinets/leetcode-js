import {findAnagrams} from '../script'

describe('438. Find All Anagrams in a String', (): void => {
    it('One anagram', (): void => {
        expect(findAnagrams("cbaebabacd", "abc"))
            .toStrictEqual([0, 6])
    })

    it('Multiple anagrams', (): void => {
        expect(findAnagrams("abab", "ab"))
            .toStrictEqual([0, 1, 2])
    })
})
