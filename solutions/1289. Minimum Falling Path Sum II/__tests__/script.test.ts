import {minFallingPathSum} from '../script'

describe('1289. Minimum Falling Path Sum II', (): void => {

    it('Positive sum', (): void => {
        expect(minFallingPathSum([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toBe(13)
    })

    it('Short path', (): void => {
        expect(minFallingPathSum([
            [7]
        ])).toBe(7)
    })


    it('Negative num', (): void => {
        expect(minFallingPathSum([
            [-19, 57],
            [-40, -5]
        ])).toBe(-24)
    })
})
