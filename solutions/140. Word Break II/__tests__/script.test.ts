import {wordBreak} from '../script'

describe('140. Word Break II', (): void => {

    it('No break possible', (): void => {
        expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
            .toEqual([])
    })

    it('Use full word', (): void => {
        expect(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))
            .toEqual(["cat sand dog", "cats and dog"])
    })

    it('Use part of the word', (): void => {
        expect(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]))
            .toEqual(["pine apple pen apple", "pine applepen apple", "pineapple pen apple"])
    })
})
