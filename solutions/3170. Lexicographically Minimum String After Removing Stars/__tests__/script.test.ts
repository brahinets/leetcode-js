import {clearStars} from '../script'

describe('3170. Lexicographically Minimum String After Removing Stars', (): void => {
    it('Smallest is nearest', (): void => {
        expect(clearStars("aaba*"))
            .toBe("aab")
    })

    it('Smallest is not nearest', (): void => {
        expect(clearStars("de*"))
            .toBe("e")
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
