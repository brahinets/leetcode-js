import {findLUSlength} from '../script'

describe('521. Longest Uncommon Subsequence I', (): void => {

    it('Entire string is uncommon', (): void => {
        expect(findLUSlength("aba", "cdc"))
            .toBe(3)
    })

    it('Full string is common', (): void => {
        expect(findLUSlength("aaa", "aaa"))
            .toBe(-1)
    })
})
