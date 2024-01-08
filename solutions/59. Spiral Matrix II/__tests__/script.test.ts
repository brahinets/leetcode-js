import {generateMatrix} from '../script'

describe('59. Spiral Matrix II', (): void => {
    it('Single element', (): void => {
        expect(generateMatrix(1))
            .toEqual([[1]])
    })

    it('Square small', (): void => {
        expect(generateMatrix(2))
            .toEqual([
                [1, 2],
                [4, 3]
            ])
    })

    it('Square big', (): void => {
        expect(generateMatrix(3))
            .toEqual([
                [1, 2, 3],
                [8, 9, 4],
                [7, 6, 5]
            ])
    })
})
