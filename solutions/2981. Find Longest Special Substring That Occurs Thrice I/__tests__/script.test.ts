import {maximumLength} from '../script'

describe('2981. Find Longest Special Substring That Occurs Thrice I', (): void => {
    it('No special substring', (): void => {
        expect(maximumLength("abcdef"))
            .toBe(-1)
    })

    it('Short special substring', (): void => {
        expect(maximumLength("abcaba"))
            .toBe(1)
    })

    it('Long special substring', (): void => {
        expect(maximumLength("aaaa"))
            .toBe(2)
    })
})
