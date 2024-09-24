import {longestCommonPrefix} from '../script'

describe('3043. Find the Length of the Longest Common Prefix', (): void => {
    it('Has common prefix', (): void => {
        expect(longestCommonPrefix([1, 10, 100], [1000]))
            .toBe(3)
    })

    it('No common prefix', (): void => {
        expect(longestCommonPrefix([1, 2, 3], [4, 4, 4]))
            .toBe(0)
    })
})
