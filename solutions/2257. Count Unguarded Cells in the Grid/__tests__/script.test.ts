import {countUnguarded} from '../script'

describe('2257. Count Unguarded Cells in the Grid', (): void => {
    it('One', (): void => {
        expect(countUnguarded(4, 6, [[0, 0], [1, 1], [2, 3]], [[0, 1], [2, 2], [1, 4]]))
            .toBe(7)
    })

    it('Two', (): void => {
        expect(countUnguarded(3, 3, [[1, 1]], [[0, 1], [1, 0], [2, 1], [1, 2]]))
            .toBe(4)
    })

})
