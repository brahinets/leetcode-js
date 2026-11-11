import { minimumCost } from '../script'

describe('3789. Minimum Cost to Acquire Required Items', (): void => {
    it('covers both requirements with shared items when costBoth is cheapest', (): void => {
        const result: number = minimumCost(3, 2, 1, 3, 2)

        expect(result).toBe(3)
    })

    it('buys separate items when costBoth exceeds individual prices', (): void => {
        const result: number = minimumCost(5, 4, 15, 2, 3)

        expect(result).toBe(22)
    })

    it('spends nothing when no items are required', (): void => {
        const result: number = minimumCost(5, 4, 15, 0, 0)

        expect(result).toBe(0)
    })

    it('covers the smaller requirement fully with shared items', (): void => {
        const result: number = minimumCost(1, 1, 1, 4, 2)

        expect(result).toBe(4)
    })

    it('pairs requirements when combined purchase is cheaper than shared', (): void => {
        const result: number = minimumCost(2, 3, 4, 5, 5)

        expect(result).toBe(20)
    })

    it('prefers shared items for the surplus of one requirement', (): void => {
        const result: number = minimumCost(10, 10, 3, 1, 5)

        expect(result).toBe(15)
    })

    it('fills only the second requirement', (): void => {
        const result: number = minimumCost(7, 6, 9, 0, 4)

        expect(result).toBe(24)
    })

    it('fills only the first requirement', (): void => {
        const result: number = minimumCost(7, 6, 9, 4, 0)

        expect(result).toBe(28)
    })

    it('handles large requirements without overflow', (): void => {
        const result: number = minimumCost(1000000, 1000000, 1000000, 1000000000, 1000000000)

        expect(result).toBe(1000000000000000)
    })
})
