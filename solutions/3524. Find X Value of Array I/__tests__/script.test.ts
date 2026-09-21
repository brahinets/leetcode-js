import { resultArray } from '../script'

describe('3524. Find X Value of Array I', (): void => {
    it('array with distinct residues and increasing values', (): void => {
        const nums: number[] = [1, 2, 3, 4, 5]
        const k: number = 3

        const result: number[] = resultArray(nums, k)

        expect(result)
            .toEqual([9, 2, 4])
    })

    it('powers of two with no way to reach one residue', (): void => {
        const nums: number[] = [1, 2, 4, 8, 16, 32]
        const k: number = 4

        const result: number[] = resultArray(nums, k)

        expect(result)
            .toEqual([18, 1, 2, 0])
    })

    it('repeated values with duplicates', (): void => {
        const nums: number[] = [1, 1, 2, 1, 1]
        const k: number = 2

        const result: number[] = resultArray(nums, k)

        expect(result)
            .toEqual([9, 6])
    })

    it('single element array', (): void => {
        const nums: number[] = [7]
        const k: number = 5

        const result: number[] = resultArray(nums, k)

        expect(result)
            .toEqual([0, 0, 1, 0, 0])
    })

    it('k equal to one collects every subarray into residue zero', (): void => {
        const nums: number[] = [3, 5, 9]
        const k: number = 1

        const result: number[] = resultArray(nums, k)

        expect(result)
            .toEqual([6])
    })

    it('large values that require modular reduction before multiplication', (): void => {
        const nums: number[] = [1000000000, 999999999]
        const k: number = 5

        const result: number[] = resultArray(nums, k)

        expect(result)
            .toEqual([2, 0, 0, 0, 1])
    })
})
