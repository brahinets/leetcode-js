import { minSwaps } from '../script'

describe('3551. Minimum Swaps to Sort by Digit Sum', (): void => {
    it('two elements needing a single exchange', (): void => {
        const nums: number[] = [37, 100]

        const result: number = minSwaps(nums)

        expect(result).toBe(1)
    })

    it('already sorted by digit sum', (): void => {
        const nums: number[] = [22, 14, 33, 7]

        const result: number = minSwaps(nums)

        expect(result).toBe(0)
    })

    it('several independent misplaced pairs', (): void => {
        const nums: number[] = [18, 43, 34, 16]

        const result: number = minSwaps(nums)

        expect(result).toBe(2)
    })

    it('single element', (): void => {
        const nums: number[] = [5]

        const result: number = minSwaps(nums)

        expect(result).toBe(0)
    })

    it('two elements already in order', (): void => {
        const nums: number[] = [1, 2]

        const result: number = minSwaps(nums)

        expect(result).toBe(0)
    })

    it('fully reversed digit sums', (): void => {
        const nums: number[] = [4, 3, 2, 1]

        const result: number = minSwaps(nums)

        expect(result).toBe(2)
    })

    it('misplaced elements forming one cycle of length three', (): void => {
        const nums: number[] = [2, 3, 1]

        const result: number = minSwaps(nums)

        expect(result).toBe(2)
    })

    it('equal digit sums ordered by smaller value first', (): void => {
        const nums: number[] = [30, 12, 21, 3]

        const result: number = minSwaps(nums)

        expect(result).toBe(1)
    })

    it('equal digit sums already ordered by value', (): void => {
        const nums: number[] = [3, 12, 21, 30]

        const result: number = minSwaps(nums)

        expect(result).toBe(0)
    })

    it('upper bound values with differing digit sums', (): void => {
        const nums: number[] = [999999999, 1000000000]

        const result: number = minSwaps(nums)

        expect(result).toBe(1)
    })
})
