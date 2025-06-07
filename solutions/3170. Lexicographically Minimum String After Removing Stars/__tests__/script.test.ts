import {clearStars} from '../script'

describe('3170. Lexicographically Minimum String After Removing Stars', (): void => {
    it('Remove one', (): void => {
        expect(clearStars("aaba*"))
            .toBe("aab")
    })

    it('Remove multiple', (): void => {
        expect(clearStars("aa*ba*"))
            .toBe("ab")
    })

    it('Cannot remove anything', (): void => {
        expect(clearStars("abc"))
            .toBe("abc")
    })
})
