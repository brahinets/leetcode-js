import {largestMagicSquare} from '../script'

describe('1895. Largest Magic Square', (): void => {
    it('Big Magic Square', (): void => {
        expect(largestMagicSquare([
            [7, 1, 4, 5, 6],
            [2, 5, 1, 6, 4],
            [1, 5, 4, 3, 2],
            [1, 2, 7, 3, 4]
        ])).toBe(3)
    })

    it('Small Magic Square', (): void => {
        expect(largestMagicSquare([
            [5, 1, 3, 1],
            [9, 3, 3, 1],
            [1, 3, 3, 8]
        ])).toBe(2)
    })

    it('Single Magic Square', (): void => {
        expect(largestMagicSquare([
            [1, 2],
            [3, 4]
        ])).toBe(1)
    })
})
