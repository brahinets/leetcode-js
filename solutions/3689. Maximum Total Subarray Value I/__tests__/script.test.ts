import {maxTotalValue} from '../script'

describe('3689. Maximum Total Subarray Value I', (): void => {
    it('maximizes total by reusing the best subarray across k picks', (): void => {
        const numbers: number[] = [1, 3, 2]
        const k: number = 2

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(4)
    })

    it('scales the global range by k when repeating subarrays is optimal', (): void => {
        const numbers: number[] = [4, 2, 5, 1]
        const k: number = 3

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(12)
    })

    it('produces zero when all elements are identical', (): void => {
        const numbers: number[] = [7, 7, 7]
        const k: number = 5

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(0)
    })

    it('handles single-element array where max equals min', (): void => {
        const numbers: number[] = [42]
        const k: number = 100000

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(0)
    })

    it('handles k equal to one by returning the global range once', (): void => {
        const numbers: number[] = [3, 1, 4, 1, 5, 9]
        const k: number = 1

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(8)
    })

    it('handles array with two elements at constraint boundaries', (): void => {
        const numbers: number[] = [0, 1000000000]
        const k: number = 100000

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(100000 * 1000000000)
    })
})
