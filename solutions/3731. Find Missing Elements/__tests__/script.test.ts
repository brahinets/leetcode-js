import { findMissingElements } from '../script'

describe('3731. Find Missing Elements', (): void => {
    it('single gap between the extremes', (): void => {
        const nums: number[] = [1, 4, 2, 5]

        const result: number[] = findMissingElements(nums)

        expect(result)
            .toEqual([3])
    })

    it('no gaps in a consecutive range', (): void => {
        const nums: number[] = [7, 8, 6, 9]

        const result: number[] = findMissingElements(nums)

        expect(result)
            .toEqual([])
    })

    it('multiple consecutive missing values', (): void => {
        const nums: number[] = [5, 1]

        const result: number[] = findMissingElements(nums)

        expect(result)
            .toEqual([2, 3, 4])
    })

    it('minimal array of two adjacent values', (): void => {
        const nums: number[] = [1, 2]

        const result: number[] = findMissingElements(nums)

        expect(result)
            .toEqual([])
    })

    it('extremes are the same value repeated as smallest and largest', (): void => {
        const nums: number[] = [100, 1]

        const result: number[] = findMissingElements(nums)

        const expectedLength: number = 98
        expect(result)
            .toHaveLength(expectedLength)
    })

    it('unsorted array with extremes not at the ends', (): void => {
        const nums: number[] = [4, 9, 6, 3]

        const result: number[] = findMissingElements(nums)

        expect(result)
            .toEqual([5, 7, 8])
    })
})
