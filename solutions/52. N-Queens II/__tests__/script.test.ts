import {totalNQueens} from '../script'

describe('52. N-Queens II', (): void => {
    it('There are two distinct solutions', (): void => {
        expect(totalNQueens(4))
            .toEqual(2)
    })

    it('One Solution', (): void => {
        expect(totalNQueens(1))
            .toEqual(1)
    })

    it('No Solutions', (): void => {
        expect(totalNQueens(2))
            .toEqual(0)
    })
})
