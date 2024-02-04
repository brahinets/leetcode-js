import {repeatedSubstringPattern} from '../script'

describe('459. Repeated Substring Pattern', (): void => {
    it('Nope', (): void => {
        expect(repeatedSubstringPattern("aba"))
            .toBe(false)
    })

    it('Yes, doubled', (): void => {
        expect(repeatedSubstringPattern("abab"))
            .toBe(true)
    })

    it('Yes, multiple times', (): void => {
        expect(repeatedSubstringPattern("abcabcabcabc"))
            .toBe(true)
    })
})
