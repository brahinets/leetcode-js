import {maxSubsequence} from '../script'

describe('2099. Find Subsequence of Length K With the Largest Sum', (): void => {
    it('One', (): void => {
        expect(maxSubsequence([2, 1, 3, 3], 2))
            .toEqual([3, 3])
    })

    it('Two', (): void => {
        expect(maxSubsequence([-1, -2, 3, 4], 3))
            .toEqual([-1, 3, 4])
    })

    it('Three', (): void => {
        expect(maxSubsequence([3, 4, 3, 3], 2))
            .toEqual([3, 4])
    })
})
