import {countSubstrings} from '../script'

describe('647. Palindromic Substrings', (): void => {

    it('Different', (): void => {
        expect(countSubstrings("abc"))
            .toBe(3)
    })

    it('Repeat', (): void => {
        expect(countSubstrings("aaa"))
            .toBe(6)
    })
})
