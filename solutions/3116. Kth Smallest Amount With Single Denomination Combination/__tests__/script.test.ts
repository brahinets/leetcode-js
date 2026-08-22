import { findKthSmallest } from '../script'

describe('3116. Kth Smallest Amount With Single Denomination Combination', (): void => {
    it('kth amount lands on a value produced by multiple coins', (): void => {
        expect(findKthSmallest([3, 6, 9], 3)).toBe(9)
    })

    it('kth amount lands on a value produced by a single coin', (): void => {
        expect(findKthSmallest([5, 2], 7)).toBe(12)
    })

    it('single coin denomination', (): void => {
        expect(findKthSmallest([4], 5)).toBe(20)
    })

    it('coin value of one produces consecutive amounts', (): void => {
        expect(findKthSmallest([1, 7], 10)).toBe(10)
    })

    it('large k value when a coin of value one makes every amount achievable', (): void => {
        const denominations: number[] = [
            1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 4, 6, 8, 9, 10
        ]

        expect(findKthSmallest(denominations, 1000000000)).toBe(1000000000)
    })
})
