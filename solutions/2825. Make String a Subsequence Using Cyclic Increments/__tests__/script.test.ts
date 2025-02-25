import {canMakeSubsequence} from '../script'

describe('2825. Make String a Subsequence Using Cyclic Increments', (): void => {
    it('One', (): void => {
        expect(canMakeSubsequence("abc", "ad"))
            .toBe(true)
    })

    it('Two', (): void => {
        expect(canMakeSubsequence("zc", "ad"))
            .toBe(true)
    })

    it('Three', (): void => {
        expect(canMakeSubsequence("ab", "d"))
            .toBe(false)
    })
})
