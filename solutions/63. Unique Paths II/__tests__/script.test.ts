import {uniquePathsWithObstacles} from '../script'

describe('63. Unique Paths II', (): void => {
    it('One', (): void => {
        expect(uniquePathsWithObstacles([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ])).toBe(2)
    })

    it('Two', (): void => {
        expect(uniquePathsWithObstacles([
            [0, 1],
            [0, 0]
        ])).toBe(1)
    })

    it('Three', (): void => {
        expect(uniquePathsWithObstacles([
            [1]
        ])).toBe(0)
    })

    it('Four', (): void => {
        expect(uniquePathsWithObstacles([
            [0]
        ])).toBe(1)
    })

    it('Five', (): void => {
        expect(uniquePathsWithObstacles([
            [0, 0],
            [0, 1]
        ])).toBe(0)
    })

    it('Six', (): void => {
        expect(uniquePathsWithObstacles([
            [1, 0]
        ])).toBe(0)
    })

    it('Seven', (): void => {
        expect(uniquePathsWithObstacles([
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ])).toBe(2)
    })
})
