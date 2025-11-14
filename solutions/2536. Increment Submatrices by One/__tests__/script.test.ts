import {rangeAddQueries} from '../script'

describe('2536. Increment Submatrices by One', (): void => {
    it('Part of matrix incremented', (): void => {
        expect(rangeAddQueries(3, [[1, 1, 2, 2], [0, 0, 1, 1]]))
            .toEqual([[1, 1, 0], [1, 2, 1], [0, 1, 1]])
    })

    it('Full matrix incremented', (): void => {
        expect(rangeAddQueries(2, [[0, 0, 1, 1]]))
            .toEqual([[1, 1], [1, 1]])
    })
})
