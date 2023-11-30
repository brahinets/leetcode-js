import {WordDictionary} from "../script";

describe('211. Design Add and Search Words Data Structure', (): void => {

    it('Test', (): void => {
        const wordDictionary: WordDictionary = new WordDictionary()
        wordDictionary.addWord("bad")
        wordDictionary.addWord("dad")
        wordDictionary.addWord("mad")

        expect(wordDictionary.search("pad"))
            .toBe(false)

        expect(wordDictionary.search("bad"))
            .toBe(true)

        expect(wordDictionary.search(".ad"))
            .toBe(true)

        expect(wordDictionary.search("b.."))
            .toBe(true)
    })
})
