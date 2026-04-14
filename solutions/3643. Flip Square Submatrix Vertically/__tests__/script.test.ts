import { reverseSubmatrix } from '../script'

describe('3643. Flip Square Submatrix Vertically', (): void => {
    it('flips a 3x3 submatrix starting at (1,0) in a 4x4 grid', (): void => {
        expect(reverseSubmatrix(
            [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],
            1, 0, 3
        )).toEqual([[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]])
    })

    it('flips a 2x2 submatrix starting at (0,2) in a 2x4 grid', (): void => {
        expect(reverseSubmatrix(
            [[3,4,2,3],[2,3,4,2]],
            0, 2, 2
        )).toEqual([[3,4,4,2],[2,3,2,3]])
    })

    it('grid unchanged when k equals 1', (): void => {
        expect(reverseSubmatrix([[1,2],[3,4]], 0, 1, 1))
            .toEqual([[1,2],[3,4]])
    })

    it('flips the entire matrix when submatrix covers all rows and columns', (): void => {
        expect(reverseSubmatrix([[1,2],[3,4]], 0, 0, 2))
            .toEqual([[3,4],[1,2]])
    })
})
