import { minAbsDiff } from '../script'

describe('3884. Minimum Absolute Difference in Sliding Submatrix', (): void => {
    it('finds minimum absolute difference in a single 2x2 submatrix', (): void => {
        expect(minAbsDiff([[1, 8], [3, -2]], 2))
            .toEqual([[2]])
    })

    it('produces zeros when k equals 1 and each submatrix has one distinct value', (): void => {
        expect(minAbsDiff([[3, -1]], 1))
            .toEqual([[0, 0]])
    })

    it('computes correct differences for two overlapping 2x2 submatrices', (): void => {
        expect(minAbsDiff([[1, -2, 3], [2, 3, 5]], 2))
            .toEqual([[1, 2]])
    })

    it('produces zero when all elements in the submatrix are identical', (): void => {
        expect(minAbsDiff([[5, 5], [5, 5]], 2))
            .toEqual([[0]])
    })

    it('produces zero for a single-element submatrix', (): void => {
        expect(minAbsDiff([[7]], 1))
            .toEqual([[0]])
    })
})
