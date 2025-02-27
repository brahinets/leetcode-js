import {lenLongestFibSubseq} from '../script'

describe('873. Length of Longest Fibonacci Subsequence', (): void => {
    it('One', (): void => {
        expect(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]))
            .toBe(3)
    })
})
