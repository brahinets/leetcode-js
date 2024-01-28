import {numSubmatrixSumTarget} from '../script'

describe('1074. Number of Submatrices That Sum to Target', (): void => {

    it('Multiple minimal sub-matrices', (): void => {
        expect(numSubmatrixSumTarget([
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ], 0)).toBe(4)
    })

    it('Multiple sub-matrices', (): void => {
        expect(numSubmatrixSumTarget([
            [1, -1],
            [-1, 1]
        ], 0)).toBe(5)
    })


    it('No sub-matrices', (): void => {
        expect(numSubmatrixSumTarget([
            [904]
        ], 0)).toBe(0)
    })
})
