import { maxSum } from '../script'

describe('2897. Apply Operations on Array to Maximize Sum of Squares', (): void => {
    it('bits gathered into two largest elements', (): void => {
        const nums: number[] = [2, 6, 5, 8]
        const k: number = 2

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(261)
    })

    it('no operation improves the selection', (): void => {
        const nums: number[] = [4, 5, 4, 7]
        const k: number = 3

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(90)
    })

    it('single element', (): void => {
        const nums: number[] = [5]
        const k: number = 1

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(25)
    })

    it('single pick collects every available bit position', (): void => {
        const nums: number[] = [1, 2, 3]
        const k: number = 1

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(9)
    })

    it('all elements picked leaves leftover bits in the last element', (): void => {
        const nums: number[] = [1, 2, 3]
        const k: number = 3

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(18)
    })

    it('identical powers of two merge into one value', (): void => {
        const nums: number[] = [1, 1, 1, 1]
        const k: number = 1

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(1)
    })

    it('result is reduced by modulo for large values', (): void => {
        const nums: number[] = new Array<number>(100000).fill(1000000000)
        const k: number = 100000

        const result: number = maxSum(nums, k)

        expect(result)
            .toBe(4900000)
    })
})
