import { numberOfSubmatrices } from '../script'

describe('3212. Count Submatrices With Equal Frequency of X and Y', (): void => {
    it('returns 3 for the first example', (): void => {
        expect(numberOfSubmatrices([['X', 'Y', '.'], ['Y', '.', '.']]))
            .toBe(3)
    })

    it('returns 0 when no submatrix has equal frequency', (): void => {
        expect(numberOfSubmatrices([['X', 'X'], ['X', 'Y']]))
            .toBe(0)
    })

    it('returns 0 when grid has no X', (): void => {
        expect(numberOfSubmatrices([['.', '.'], ['.', '.']]))
            .toBe(0)
    })

    it('returns 1 for single X and single Y side by side', (): void => {
        expect(numberOfSubmatrices([['X', 'Y']]))
            .toBe(1)
    })

    it('returns 1 when top-left is dot but full submatrix contains equal X and Y', (): void => {
        expect(numberOfSubmatrices([['.', 'X'], ['Y', '.']]))
            .toBe(1)
    })
})
