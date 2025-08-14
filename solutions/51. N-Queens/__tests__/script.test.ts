import {solveNQueens} from '../script'

describe('51. N-Queens', (): void => {
    it('Multiple Queens', (): void => {
        expect(solveNQueens(4))
            .toEqual([[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]])
    })

    it('One Queen', (): void => {
        expect(solveNQueens(1))
            .toEqual([["Q"]])
    })
})
