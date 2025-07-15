import {isValid} from '../script'

describe('3136. Valid Word', (): void => {
    it('Valid', (): void => {
        expect(isValid("234Adas"))
            .toBe(true)
    })

    it('Word is too short', (): void => {
        expect(isValid("b3"))
            .toBe(false)
    })

    it('Word does not have consonant', (): void => {
        expect(isValid("a3e"))
            .toBe(false)
    })

    it('Word has invalid character', (): void => {
        expect(isValid("a3$e"))
            .toBe(false)
    })
})
