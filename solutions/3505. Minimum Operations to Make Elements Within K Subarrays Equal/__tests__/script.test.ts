import { minOperations } from '../script'

describe('3505. Minimum Operations to Make Elements Within K Subarrays Equal', (): void => {
    it('two separate windows need adjustment', (): void => {
        const nums: number[] = [5, -2, 1, 3, 7, 3, 6, 4, -1]

        const result: number = minOperations(nums, 3, 2)

        expect(result)
            .toBe(8)
    })

    it('adjacent windows share a common value', (): void => {
        const nums: number[] = [9, -2, -2, -2, 1, 5]

        const result: number = minOperations(nums, 2, 2)

        expect(result)
            .toBe(3)
    })

    it('single window covering whole array', (): void => {
        const nums: number[] = [1, 5]

        const result: number = minOperations(nums, 2, 1)

        expect(result)
            .toBe(4)
    })

    it('already equal elements need no operations', (): void => {
        const nums: number[] = [3, 3, 3, 3]

        const result: number = minOperations(nums, 2, 2)

        expect(result)
            .toBe(0)
    })

    it('extreme values far apart', (): void => {
        const nums: number[] = [-1000000, 1000000]

        const result: number = minOperations(nums, 2, 1)

        expect(result)
            .toBe(2000000)
    })
})
