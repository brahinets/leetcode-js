import {minFallingPathSum} from '../script'

describe('931. Minimum Falling Path Sum', (): void => {
    
    it('Positive sum', (): void => {
        expect(minFallingPathSum([
            [2, 1, 3],
            [6, 5, 4],
            [7, 8, 9]
        ])).toBe(13)
    })

    it('Negative num', (): void => {
        expect(minFallingPathSum([
            [-19, 57],
            [-40, -5]
        ])).toBe(-59)
    })
})
