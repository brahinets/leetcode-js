import { getBiggestThree } from '../script'

describe('1878. Get Biggest Three Rhombus Sums in a Grid', (): void => {
    it('returns three biggest distinct rhombus sums from 5x5 grid', (): void => {
        expect(getBiggestThree([
            [3, 4, 5, 1, 3],
            [3, 3, 4, 2, 3],
            [20, 30, 200, 40, 10],
            [1, 5, 5, 4, 1],
            [4, 3, 2, 2, 5],
        ])).toEqual([228, 216, 211])
    })

    it('returns three biggest sums from 3x3 grid', (): void => {
        expect(getBiggestThree([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ])).toEqual([20, 9, 8])
    })

    it('returns single element when all values are the same', (): void => {
        expect(getBiggestThree([[7, 7, 7]])).toEqual([7])
    })

    it('returns single cell for 1x1 grid', (): void => {
        expect(getBiggestThree([[42]])).toEqual([42])
    })

    it('returns distinct sums only, not duplicates', (): void => {
        // All cells equal — only one distinct rhombus sum exists
        expect(getBiggestThree([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ])).toEqual([4, 1])
        // size-1 rhombus border has 4 cells each with value 1 → sum 4
        // size-0 rhombus = 1
    })

    it('handles single-row grid', (): void => {
        const result = getBiggestThree([[5, 3, 8, 2, 7]])
        expect(result).toEqual([8, 7, 5])
    })

    it('handles single-column grid', (): void => {
        const result = getBiggestThree([[5], [3], [8], [2], [7]])
        expect(result).toEqual([8, 7, 5])
    })
})
