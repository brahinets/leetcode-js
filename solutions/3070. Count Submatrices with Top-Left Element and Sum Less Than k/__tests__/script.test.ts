import { countSubmatrices } from '../script'

describe('3070. Count Submatrices with Top-Left Element and Sum Less Than k', (): void => {
    it('count of 4 for the first example', (): void => {
        expect(countSubmatrices([[7, 6, 3], [6, 6, 1]], 18))
            .toBe(4)
    })

    it('count of 6 for 3x3 grid with k=20', (): void => {
        expect(countSubmatrices([[7, 2, 9], [1, 5, 0], [2, 6, 6]], 20))
            .toBe(6)
    })

    it('count of 1 for single cell equal to k', (): void => {
        expect(countSubmatrices([[5]], 5))
            .toBe(1)
    })

    it('zero count for single cell greater than k', (): void => {
        expect(countSubmatrices([[5]], 4))
            .toBe(0)
    })

    it('count of all cells when all sums fit within k', (): void => {
        expect(countSubmatrices([[1, 1], [1, 1]], 10))
            .toBe(4)
    })
})
