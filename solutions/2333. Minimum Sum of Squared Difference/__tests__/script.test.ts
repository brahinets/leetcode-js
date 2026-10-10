import { minSumSquareDiff } from '../script'

describe('2333. Minimum Sum of Squared Difference', (): void => {
    it('no modifications allowed', (): void => {
        const nums1: number[] = [1, 2, 3, 4]
        const nums2: number[] = [2, 10, 20, 19]

        const result: number = minSumSquareDiff(nums1, nums2, 0, 0)

        expect(result)
            .toBe(579)
    })

    it('modifications split between both arrays', (): void => {
        const nums1: number[] = [1, 4, 10, 12]
        const nums2: number[] = [5, 8, 6, 9]

        const result: number = minSumSquareDiff(nums1, nums2, 1, 1)

        expect(result)
            .toBe(43)
    })

    it('modifications are enough to zero every difference', (): void => {
        const nums1: number[] = [1, 4, 10, 12]
        const nums2: number[] = [5, 8, 6, 9]

        const result: number = minSumSquareDiff(nums1, nums2, 10, 10)

        expect(result)
            .toBe(0)
    })

    it('identical arrays', (): void => {
        const nums1: number[] = [3, 3, 3]
        const nums2: number[] = [3, 3, 3]

        const result: number = minSumSquareDiff(nums1, nums2, 5, 5)

        expect(result)
            .toBe(0)
    })

    it('single element with partial reduction', (): void => {
        const nums1: number[] = [10]
        const nums2: number[] = [0]

        const result: number = minSumSquareDiff(nums1, nums2, 3, 0)

        expect(result)
            .toBe(49)
    })

    it('modification spread across equal differences', (): void => {
        const nums1: number[] = [5, 5]
        const nums2: number[] = [0, 0]

        const result: number = minSumSquareDiff(nums1, nums2, 1, 0)

        expect(result)
            .toBe(41)
    })

    it('largest difference leveled down to the next one before spreading', (): void => {
        const nums1: number[] = [5, 3]
        const nums2: number[] = [0, 0]

        const result: number = minSumSquareDiff(nums1, nums2, 0, 4)

        expect(result)
            .toBe(8)
    })

    it('negative differences are treated as absolute values', (): void => {
        const nums1: number[] = [0, 0]
        const nums2: number[] = [4, 2]

        const result: number = minSumSquareDiff(nums1, nums2, 2, 0)

        expect(result)
            .toBe(8)
    })

    it('large values stay within safe integer range', (): void => {
        const nums1: number[] = new Array<number>(100000).fill(100000)
        const nums2: number[] = new Array<number>(100000).fill(0)

        const result: number = minSumSquareDiff(nums1, nums2, 0, 0)

        expect(result)
            .toBe(1000000000000000)
    })
})
