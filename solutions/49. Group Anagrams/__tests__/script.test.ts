import {groupAnagrams} from '../script'

describe('49. Group Anagrams', (): void => {
    it('Zero anagram', (): void => {
        expect(groupAnagrams([""]))
            .toStrictEqual([[""]])
    })

    it('One anagram', (): void => {
        expect(groupAnagrams(["a"]))
            .toStrictEqual([["a"]])
    })

    it('Multiple anagrams', (): void => {
        expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
            .toStrictEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])
    })
})
