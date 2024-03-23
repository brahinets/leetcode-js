import {minWindow} from '../script'

describe('76. Minimum Window Substring', (): void => {
    it('Substring is window', (): void => {
        expect(minWindow("ADOBECODEBANC", "ABC"))
            .toBe("BANC")
    })

    it('Substring is window #2', (): void => {
        expect(minWindow("bdab", "ab"))
            .toBe("ab")
    })

    it('Full string is window', (): void => {
        expect(minWindow("a", "a"))
            .toBe("a")
    })

    it('Not enough letters', (): void => {
        expect(minWindow("a", "aa"))
            .toBe("")
    })

    it('No such letters', (): void => {
        expect(minWindow("a", "b"))
            .toBe("")
    })
})
