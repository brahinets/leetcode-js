import {separateSquares} from '../script'

describe('3453. Separate Squares I', (): void => {
    it('Integer', (): void => {
        expect(separateSquares([[0, 0, 1], [2, 2, 1]]))
            .toBeCloseTo(1.00000, 5)
    })

    it('Float', (): void => {
        expect(separateSquares([[0, 0, 2], [1, 1, 1]]))
            .toBeCloseTo(1.16667, 5)
    })
})
