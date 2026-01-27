import { minCost } from '../script'

describe('3650. Minimum Cost Path with Edge Reversals', (): void => {
    it('Reverse edge to reach destination', (): void => {
        expect(minCost(4, [[0, 1, 3], [3, 1, 1], [2, 3, 4], [0, 2, 2]]))
            .toBe(5)
    })

    it('No reversal needed', (): void => {
        expect(minCost(4, [[0, 2, 1], [2, 1, 1], [1, 3, 1], [2, 3, 3]]))
            .toBe(3)
    })

    it('Unreachable destination returns -1', (): void => {
        expect(minCost(3, [[1, 2, 1]]))
            .toBe(-1)
    })

    it('Direct path is optimal', (): void => {
        expect(minCost(2, [[0, 1, 5]]))
            .toBe(5)
    })

    it('Reversed path only option', (): void => {
        expect(minCost(2, [[1, 0, 2]]))
            .toBe(4)
    })
})
