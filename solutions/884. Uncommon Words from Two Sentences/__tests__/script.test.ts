import {uncommonFromSentences} from '../script'

describe('884. Uncommon Words from Two Sentences', (): void => {
    it('Some words', (): void => {
        expect(uncommonFromSentences("this apple is sweet", "this apple is sour"))
            .toEqual(["sweet", "sour"])
    })

    it('Word is entire sentence', (): void => {
        expect(uncommonFromSentences("apple apple", "banana"))
            .toEqual(["banana"])
    })
})
