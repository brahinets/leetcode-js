import { maximumProduct } from '../script'

describe('628. Maximum Product of Three Numbers', (): void => {
    it('three positive numbers', (): void => {
        const nums: number[] = [1, 2, 3]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(6)
    })

    it('largest three beat other combinations', (): void => {
        const nums: number[] = [1, 2, 3, 4]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(24)
    })

    it('all negative numbers', (): void => {
        const nums: number[] = [-1, -2, -3]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(-6)
    })

    it('two large negatives with a positive maximize the product', (): void => {
        const nums: number[] = [-4, -3, 1, 2, 5]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(60)
    })

    it('contains zeros', (): void => {
        const nums: number[] = [-2, 0, 0, 3, 4]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(0)
    })

    it('mix where three positives win over two negatives', (): void => {
        const nums: number[] = [-5, -1, 6, 7, 8]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(336)
    })

    it('duplicate maximum values', (): void => {
        const nums: number[] = [5, 5, 5, 1]

        const result: number = maximumProduct(nums)

        expect(result)
            .toBe(125)
    })
})
