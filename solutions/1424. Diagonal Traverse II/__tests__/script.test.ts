import {findDiagonalOrder} from '../script'

describe('1424. Diagonal Traverse II', (): void => {

    it('Rectangular arrays', (): void => {
        expect(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
            .toEqual([1, 4, 2, 7, 5, 3, 8, 6, 9])
    })

    it('Non-Rectangular arrays', (): void => {
        expect(findDiagonalOrder([[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]))
            .toEqual([1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16])
    })
})
