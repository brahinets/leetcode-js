import { countSubmatrices } from '../script'

describe('3070. Count Submatrices with Top-Left Element and Sum Less Than k', (): void => {
    it('returns 4 for the first example', (): void => {
        expect(countSubmatrices([[7, 6, 3], [6, 6, 1]], 18))
            .toBe(4)
    })

    it('returns 0 when all submatrices exceed k', (): void => {
        expect(countSubmatrices([[7, 2, 9], [1, 5, 0], [2, 6, 6]], 20))
            .toBe(6)
    })

    it('returns 1 for single cell equal to k', (): void => {
        expect(countSubmatrices([[5]], 5))
            .toBe(1)
    })

    it('returns 0 for single cell greater than k', (): void => {
        expect(countSubmatrices([[5]], 4))
            .toBe(0)
    })

    it('returns all cells when all sums fit within k', (): void => {
        expect(countSubmatrices([[1, 1], [1, 1]], 10))
            .toBe(4)
    })
})
