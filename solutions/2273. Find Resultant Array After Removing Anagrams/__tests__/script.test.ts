import {removeAnagrams} from '../script'

describe('2273. Find Resultant Array After Removing Anagrams', (): void => {
    it('Some adjacent strings in words are anagrams', (): void => {
        expect(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]))
            .toEqual(["abba", "cd"])
    })

    it('No two adjacent strings in words are anagrams', (): void => {
        expect(removeAnagrams(["a", "b", "c", "d", "e"]))
            .toEqual(["a", "b", "c", "d", "e"])
    })
})
