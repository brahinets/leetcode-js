import {minCostClimbingStairs} from '../script'

describe('746. Min Cost Climbing Stairs', (): void => {
    it('Quick way ', (): void => {
        expect(minCostClimbingStairs([10, 15, 20]))
            .toBe(15)
    })

    it('Tricky way ', (): void => {
        expect(minCostClimbingStairs([0, 2, 2, 1]))
            .toBe(2)
    })

    it('Long way', (): void => {
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
            .toBe(6)
    })
})
