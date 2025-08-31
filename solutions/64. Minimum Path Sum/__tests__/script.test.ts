import {minPathSum} from '../script'

describe('64. Minimum Path Sum', (): void => {
    it('Long', (): void => {
        expect(minPathSum([
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1]
        ])).toBe(7)
    })

    it('Short', (): void => {
        expect(minPathSum([
            [1, 2, 3],
            [4, 5, 6]
        ])).toBe(12)
    })
})
