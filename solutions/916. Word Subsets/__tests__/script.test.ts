import {wordSubsets} from '../script'

describe('916. Word Subsets', (): void => {
    it('One', (): void => {
        expect(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]))
            .toEqual(["facebook", "google", "leetcode"])
    })

    it('Two', (): void => {
        expect(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"]))
            .toEqual(["apple", "google", "leetcode"])
    })

    it('Three', (): void => {
        expect(wordSubsets(["amazon", "apple"], ["q"]))
            .toEqual([])
    })
})
