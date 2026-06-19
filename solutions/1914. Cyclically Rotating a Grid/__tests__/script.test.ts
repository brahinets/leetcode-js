import {rotateGrid} from '../script'

describe('1914. Cyclically Rotating a Grid', (): void => {

    it('single layer 2x2 with one rotation', (): void => {
        const result: number[][] = rotateGrid([[40, 10], [30, 20]], 1)

        expect(result)
            .toEqual([[10, 20], [40, 30]])
    })

    it('two layers 4x4 with two rotations', (): void => {
        const result: number[][] = rotateGrid([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ], 2)

        expect(result)
            .toEqual([
                [3, 4, 8, 12],
                [2, 11, 10, 16],
                [1, 7, 6, 15],
                [5, 9, 13, 14]
            ])
    })

    it('rotation count equal to ring length results in same grid', (): void => {
        const result: number[][] = rotateGrid([[40, 10], [30, 20]], 4)

        expect(result)
            .toEqual([[40, 10], [30, 20]])
    })

    it('very large k is handled via modulo', (): void => {
        const result: number[][] = rotateGrid([[40, 10], [30, 20]], 1000000001)

        expect(result)
            .toEqual([[10, 20], [40, 30]])
    })

    it('wide rectangular grid with multiple layers', (): void => {
        const result: number[][] = rotateGrid([
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24]
        ], 1)

        expect(result)
            .toEqual([
                [2, 3, 4, 5, 6, 12],
                [1, 9, 10, 11, 17, 18],
                [7, 8, 14, 15, 16, 24],
                [13, 19, 20, 21, 22, 23]
            ])
    })
})
