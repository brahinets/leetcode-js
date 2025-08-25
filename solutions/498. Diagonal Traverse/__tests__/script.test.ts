import {findDiagonalOrder} from '../script'

describe('498. Diagonal Traverse', (): void => {
    it('Complex', (): void => {
        expect(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
            .toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
    })

    it('Simple', (): void => {
        expect(findDiagonalOrder([[1, 2], [3, 4]]))
            .toEqual([1, 2, 3, 4])
    })
})
