import {longestArithSeqLength} from '../script'

describe('1027. Longest Arithmetic Subsequence', (): void => {
    it('Entire array is sequence', (): void => {
        expect(longestArithSeqLength([3, 6, 9, 12]))
            .toBe(4)
    })

    it('Sub-array is increasing sequence', (): void => {
        expect(longestArithSeqLength([9, 4, 7, 2, 10]))
            .toBe(3)
    })

    it('Sub-array is decreasing sequence', (): void => {
        expect(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]))
            .toBe(4)
    })
})
