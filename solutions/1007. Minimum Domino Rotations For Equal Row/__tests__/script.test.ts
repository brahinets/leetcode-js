import {minDominoRotations} from '../script'

describe('1007. Minimum Domino Rotations For Equal Row', (): void => {
    it('One', (): void => {
        expect(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]))
            .toBe(-1)
    })
})
