import {numberOfSpecialChars} from '../script'

describe('3121. Count the Number of Special Characters II', (): void => {
    it('all letters special with lowercase before uppercase', (): void => {
        expect(numberOfSpecialChars('aaAbcBC'))
            .toBe(3)
    })

    it('no uppercase letters present', (): void => {
        expect(numberOfSpecialChars('abc'))
            .toBe(0)
    })

    it('lowercase appears after uppercase', (): void => {
        expect(numberOfSpecialChars('AbBCab'))
            .toBe(0)
    })

    it('single lowercase character', (): void => {
        expect(numberOfSpecialChars('a'))
            .toBe(0)
    })

    it('single uppercase character', (): void => {
        expect(numberOfSpecialChars('A'))
            .toBe(0)
    })

    it('lowercase immediately followed by uppercase', (): void => {
        expect(numberOfSpecialChars('aA'))
            .toBe(1)
    })

    it('mixed special and non-special due to ordering', (): void => {
        expect(numberOfSpecialChars('aAbBCc'))
            .toBe(2)
    })

    it('all uppercase only', (): void => {
        expect(numberOfSpecialChars('ABC'))
            .toBe(0)
    })
})
