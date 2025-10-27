import {isScramble} from '../script'

describe('87. Scramble String', (): void => {
    it('One', (): void => {
        expect(isScramble("great", "rgeat"))
            .toBe(true)
    })

    it('Two', (): void => {
        expect(isScramble("abcde", "caebd"))
            .toBe(false)
    })

    it('Three', (): void => {
        expect(isScramble("a", "a"))
            .toBe(true)
    })
})
