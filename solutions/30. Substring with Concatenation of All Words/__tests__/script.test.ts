import {findSubstring} from '../script'

describe('30. Substring with Concatenation of All Words', (): void => {
    it('One concatenated substring', (): void => {
        expect(findSubstring("barfoothefoobarman", ["foo", "bar"]))
            .toEqual([0, 9])
    })

    it('here is no concatenated substring', (): void => {
        expect(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]))
            .toEqual([])
    })

    it('Multiple concatenated substrings', (): void => {
        expect(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]))
            .toEqual([6, 9, 12])
    })
})
