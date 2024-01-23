import {maxLength} from '../script'

describe('1239. Maximum Length of a Concatenated String with Unique Characters', (): void => {

    it('No strings', (): void => {
        expect(maxLength([]))
            .toBe(0)
    })

    it('One option between several strings', (): void => {
        expect(maxLength(["un", "iq", "ue"]))
            .toBe(4)
    })

    it('One option between several strings #2', (): void => {
        expect(maxLength(["cha", "r", "act", "ers"]))
            .toBe(6)
    })

    it('One option between several strings #3', (): void => {
        expect(maxLength(["a", "abc", "d", "de", "def"]))
            .toBe(6)
    })

    it('The only string is longest', (): void => {
        expect(maxLength(["abcdefghijklmnopqrstuvwxyz"]))
            .toBe(26)
    })
})
