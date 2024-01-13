import {isSubsequence} from '../script'

describe('392. Is Subsequence', (): void => {

    it('`abc` is a subsequence of `ahbgdc`', (): void => {
        expect(isSubsequence("abc", "ahbgdc"))
            .toBe(true)
    })

    it('`axc` is a not subsequence of `ahbgdc`', (): void => {
        expect(isSubsequence("axc", "ahbgdc"))
            .toBe(false)
    })
})

