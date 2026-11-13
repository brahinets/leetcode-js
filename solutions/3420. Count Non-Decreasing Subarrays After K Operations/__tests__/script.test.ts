import { countNonDecreasingSubarrays } from '../script'

describe('3420. Count Non-Decreasing Subarrays After K Operations', (): void => {
    it('counts subarrays for the first example configuration', (): void => {
        const nums: number[] = [6, 3, 1, 2, 4, 4]
        const k: number = 7

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(17)
    })

    it('counts subarrays for the second example configuration', (): void => {
        const nums: number[] = [6, 3, 1, 3, 6]
        const k: number = 4

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(12)
    })

    it('counts a single element array as one valid subarray', (): void => {
        const nums: number[] = [1000000000]
        const k: number = 1

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(1)
    })

    it('counts every subarray when the array is already non-decreasing', (): void => {
        const nums: number[] = [1, 2, 3]
        const k: number = 1

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(6)
    })

    it('counts every subarray when k covers the most expensive subarray', (): void => {
        const nums: number[] = [5, 4, 3, 2, 1]
        const k: number = 1000000000

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(15)
    })

    it('excludes a strictly decreasing pair when k is too small to fix it', (): void => {
        const nums: number[] = [3, 1]
        const k: number = 1

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(2)
    })

    it('keeps only subarrays fixable within the operation budget', (): void => {
        const nums: number[] = [3, 2, 4, 1, 2]
        const k: number = 3

        const result: number = countNonDecreasingSubarrays(nums, k)

        expect(result).toBe(11)
    })
})
