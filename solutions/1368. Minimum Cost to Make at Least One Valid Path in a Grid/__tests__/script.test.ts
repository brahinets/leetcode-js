import {minCost} from '../script'

describe('1368. Minimum Cost to Make at Least One Valid Path in a Grid', (): void => {
    it('One', (): void => {
        expect(minCost([
            [1, 1, 1, 1],
            [2, 2, 2, 2],
            [1, 1, 1, 1],
            [2, 2, 2, 2]
        ])).toBe(3)
    })

    it('Two', (): void => {
        expect(minCost([
            [1, 1, 3],
            [3, 2, 2],
            [1, 1, 4]
        ])).toBe(0)
    })

    it('Three', (): void => {
        expect(minCost([
            [1, 2],
            [4, 3]
        ])).toBe(1)
    })
})
