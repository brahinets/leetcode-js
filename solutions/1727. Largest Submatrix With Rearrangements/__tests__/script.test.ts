import {largestSubmatrix} from '../script'

describe('1727. Largest Submatrix With Rearrangements', (): void => {

    it('One-dimension sub-matrix', (): void => {
        expect(largestSubmatrix([[1, 0, 1, 0, 1]]))
            .toBe(3)
    })

    it('Square sub-matrix', (): void => {
        expect(largestSubmatrix([
            [0, 0, 1],
            [1, 1, 1],
            [1, 0, 1]])
        ).toBe(4)
    })

    it('Non-square sub-matrix', (): void => {
        expect(largestSubmatrix([[1, 1, 0], [1, 0, 1]]))
            .toBe(2)
    })
})
