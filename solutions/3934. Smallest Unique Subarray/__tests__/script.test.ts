import { smallestUniqueSubarrayLength } from '../script'

describe('3934. Smallest Unique Subarray', (): void => {
    it('all subarrays repeat until the whole array', (): void => {
        const nums: number[] = [3, 3, 3]
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(3)
    })

    it('a single element stands alone among duplicated values', (): void => {
        const nums: number[] = [2, 1, 2, 3, 3]
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(1)
    })

    it('no lone element but every pair of neighbors is unique', (): void => {
        const nums: number[] = [1, 1, 2, 2, 1]
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(2)
    })

    it('single element array is unique by itself', (): void => {
        const nums: number[] = [5]
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(1)
    })

    it('two distinct elements are each unique alone', (): void => {
        const nums: number[] = [4, 9]
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(1)
    })

    it('uniform array repeats every prefix until the full length', (): void => {
        const nums: number[] = new Array<number>(10).fill(7)
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(10)
    })

    it('alternating pattern keeps windows repeating until near the end', (): void => {
        const nums: number[] = [1, 2, 1, 2]
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(2)
    })

    it('large alternating array resolves two lengths before the end', (): void => {
        const nums: number[] = Array.from(
            { length: 100_000 },
            (_value: undefined, index: number): number => (index % 2) + 1,
        )
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(99_998)
    })

    it('large uniform array only unique at full length', (): void => {
        const nums: number[] = new Array<number>(100_000).fill(7)
        const result: number = smallestUniqueSubarrayLength(nums)

        expect(result)
            .toBe(100_000)
    })
})
