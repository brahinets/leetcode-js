import {minWindow} from '../script'

describe('76. Minimum Window Substring', (): void => {
    it('Substring is window', (): void => {
        expect(minWindow("ADOBECODEBANC", "ABC"))
            .toBe("BANC")
    })

    it('Full string is window', (): void => {
        expect(minWindow("a", "a"))
            .toBe("a")
    })

    it('Not enough letters', (): void => {
        expect(minWindow("a", "aa"))
            .toBe("")
    })
})
