import {isMatch} from '../script'

describe('10. Regular Expression Matching', (): void => {
    it('Does not match the entire string', (): void => {
        expect(isMatch("aa", "a"))
            .toBe(false)
    })

    it('Repeating char', (): void => {
        expect(isMatch("aa", "a*"))
            .toBe(true)
    })

    it('Anything', (): void => {
        expect(isMatch("ab", ".*"))
            .toBe(true)
    })
})
