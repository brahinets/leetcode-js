import { minimumSumSubarray } from '../script'

describe('3364. Minimum Positive Sum Subarray ', (): void => {
    it('example 1', (): void => {
        const nums: number[] = [3, -2, 1, 4]
        const l: number = 2
        const r: number = 3
        const result: number = minimumSumSubarray(nums, l, r)

        expect(result).toEqual(1)
    })

    it('example 2', (): void => {
        const nums: number[] = [-2, 2, -3, 1]
        const l: number = 2
        const r: number = 3
        const result: number = minimumSumSubarray(nums, l, r)

        expect(result).toEqual(-1)
    })

    it('example 3', (): void => {
        const nums: number[] = [1, 2, 3, 4]
        const l: number = 2
        const r: number = 4
        const result: number = minimumSumSubarray(nums, l, r)

        expect(result).toEqual(3)
    })
})
