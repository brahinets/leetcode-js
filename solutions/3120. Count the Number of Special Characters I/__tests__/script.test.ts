import {numberOfSpecialChars} from '../script'

describe('3120. Count the Number of Special Characters I', (): void => {
    it('multiple special characters', (): void => {
        expect(numberOfSpecialChars('aaAbcBC'))
            .toBe(3)
    })

    it('no special characters', (): void => {
        expect(numberOfSpecialChars('abc'))
            .toBe(0)
    })

    it('single special character among duplicates', (): void => {
        expect(numberOfSpecialChars('abBCab'))
            .toBe(1)
    })

    it('single character', (): void => {
        expect(numberOfSpecialChars('a'))
            .toBe(0)
    })

    it('all letters are special', (): void => {
        expect(numberOfSpecialChars('aAbBcC'))
            .toBe(3)
    })
})
