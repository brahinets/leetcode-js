import {removeDuplicateLetters} from '../script'

describe('316. Remove Duplicate Letters', (): void => {
    it('Has no duplicates', (): void => {
        expect(removeDuplicateLetters("abc"))
            .toBe("abc")
    })

    it('Has several duplicates', (): void => {
        expect(removeDuplicateLetters("bcabc"))
            .toBe("abc")
    })

    it('smallest lexicographical order when letters have varying occurrence counts', (): void => {
        expect(removeDuplicateLetters("cbacdcbc"))
            .toBe("acdb")
    })
})
