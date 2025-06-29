import {isMatch} from '../script'

describe('44. Wildcard Matching', (): void => {
    it('Does not match', (): void => {
        expect(isMatch("aa", "a"))
            .toBe(false)
    })

    it('Matches any', (): void => {
        expect(isMatch("aa", "*"))
            .toBe(true)
    })

    it('Matches some', (): void => {
        expect(isMatch("cb", "?a"))
            .toBe(false)
    })
})
