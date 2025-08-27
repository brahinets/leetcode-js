import {lenOfVDiagonal} from '../script'

describe('3459. Length of Longest V-Shaped Diagonal Segment', (): void => {
    it('V-shaped segment with turn', (): void => {
        expect(lenOfVDiagonal([
            [2, 2, 1, 2, 2],
            [2, 0, 2, 2, 0],
            [2, 0, 1, 1, 0],
            [1, 0, 2, 2, 2],
            [2, 0, 0, 2, 2]
        ])).toEqual(5)
    })

    it('V-shaped segment with different pattern', (): void => {
        expect(lenOfVDiagonal([
            [2, 2, 2, 2, 2],
            [2, 0, 2, 2, 0],
            [2, 0, 1, 1, 0],
            [1, 0, 2, 2, 2],
            [2, 0, 0, 2, 2]
        ])).toEqual(4)
    })

    it('Straight diagonal segment', (): void => {
        expect(lenOfVDiagonal([
            [1, 2, 2, 2, 2],
            [2, 2, 2, 2, 0],
            [2, 0, 0, 0, 0],
            [0, 0, 2, 2, 2],
            [2, 0, 0, 2, 0]
        ])).toEqual(5)
    })

    it('Single element', (): void => {
        expect(lenOfVDiagonal([
            [1]
        ])).toEqual(1)
    })
})
