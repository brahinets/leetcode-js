import { maxProductPath } from '../script'

describe('1594. Maximum Non-Negative Product in a Matrix', (): void => {
    it('returns -1 when all paths yield negative products', (): void => {
        expect(maxProductPath([
            [-1, -2, -3],
            [-2, -3, -3],
            [-3, -3, -2],
        ])).toBe(-1)
    })

    it('returns maximum product when path includes two negatives', (): void => {
        expect(maxProductPath([
            [1, -2, 1],
            [1, -2, 1],
            [3, -4, 1],
        ])).toBe(8)
    })

    it('returns zero when best non-negative path passes through zero', (): void => {
        expect(maxProductPath([
            [1, 3],
            [0, -4],
        ])).toBe(0)
    })

    it('returns single positive cell value for 1x1 grid', (): void => {
        expect(maxProductPath([[5]])).toBe(5)
    })

    it('returns -1 for 1x1 grid with negative value', (): void => {
        expect(maxProductPath([[-3]])).toBe(-1)
    })
})
