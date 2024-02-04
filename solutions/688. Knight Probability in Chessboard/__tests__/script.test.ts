import {knightProbability} from '../script'

describe('688. Knight Probability in Chessboard', (): void => {
    it('Will not leave the board with few steps', (): void => {
        expect(knightProbability(1, 0, 0, 0))
            .toBeCloseTo(1, 5)
    })

    it('Will likely leave the board with few steps', (): void => {
        expect(knightProbability(3, 3, 0, 0))
            .toBeCloseTo(0.01562, 5)
    })

    it('Will leave the board. Already out of the board', (): void => {
        expect(knightProbability(1, 1, -1, -1))
            .toBeCloseTo(0, 5)
    })

    it('Most likely will leave the board with few steps', (): void => {
        expect(knightProbability(3, 2, 0, 0))
            .toBeCloseTo(0.06250, 5)
    })

    it('High precision, load test', (): void => {
        expect(knightProbability(8, 30, 6, 4))
            .toBeCloseTo(0.00019, 5)
    })
})
