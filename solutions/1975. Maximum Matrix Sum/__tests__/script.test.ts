import {maxMatrixSum} from '../script'

describe('1975. Maximum Matrix Sum', (): void => {
    it('Multiply nothing', (): void => {
        expect(maxMatrixSum([
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ])).toBe(9)
    })

    it('Multiply row and col', (): void => {
        expect(maxMatrixSum([
            [1, -1],
            [-1, 1]
        ])).toBe(4)
    })

    it('Multiply row', (): void => {
        expect(maxMatrixSum([
            [1, 2, 3],
            [-1, -2, -3],
            [1, 2, 3]
        ])).toBe(16)
    })
})
