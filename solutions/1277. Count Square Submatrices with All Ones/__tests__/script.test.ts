import {countSquares} from '../script'

describe('1277. Count Square Submatrices with All Ones', (): void => {

    it('Multiple dimension sub-matrices', (): void => {
        expect(countSquares([
            [0, 1, 1, 1],
            [1, 1, 1, 1],
            [0, 1, 1, 1]
        ])).toBe(15)
    })

    it('Two dimension sub-matrices', (): void => {
        expect(countSquares([
            [1, 0, 1],
            [1, 1, 0],
            [1, 1, 0]
        ])).toBe(7)
    })

    it('One dimension sub-matrices', (): void => {
        expect(countSquares([
            [1, 0],
            [1, 1]
        ])).toBe(3)
    })

    it('No sub-matrices', (): void => {
        expect(countSquares([
            [0, 0],
            [0, 0]
        ])).toBe(0)
    })
})
