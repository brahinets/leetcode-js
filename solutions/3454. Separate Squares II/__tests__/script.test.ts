import {separateSquares} from '../script'

describe('3454. Separate Squares II', (): void => {
    it('One', (): void => {
        expect(separateSquares([[0, 0, 1], [2, 2, 1]]))
            .toBeCloseTo(1.0, 5)
    })

    it('Two', (): void => {
        expect(separateSquares([[0, 0, 2], [1, 1, 1]]))
            .toBeCloseTo(1.0, 5)
    })
})
