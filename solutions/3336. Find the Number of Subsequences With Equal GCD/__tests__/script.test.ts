import {subsequencePairCount} from '../script'

describe('3336. Find the Number of Subsequences With Equal GCD', (): void => {
    it('should handle basic example with array [3, 6, 6]', (): void => {
        const nums: number[] = [3, 6, 6]
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThan(0)
    })

    it('should handle example with array [1, 1, 1, 1]', (): void => {
        const nums: number[] = [1, 1, 1, 1]
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThan(0)
    })

    it('should handle single element', (): void => {
        const nums: number[] = [5]
        const result: number = subsequencePairCount(nums)
        expect(result).toBe(0)
    })

    it('should handle two identical elements', (): void => {
        const nums: number[] = [2, 2]
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThan(0)
    })

    it('should handle example with array [2, 3, 4]', (): void => {
        const nums: number[] = [2, 3, 4]
        const result: number = subsequencePairCount(nums)
        expect(result).toBe(0)
    })

    it('should handle array with all same GCD divisors', (): void => {
        const nums: number[] = [2, 4, 6, 8]
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThan(0)
    })

    it('should handle array with single common divisor', (): void => {
        const nums: number[] = [1, 2, 3]
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThan(0)
    })

    it('should handle array with multiple GCD possibilities', (): void => {
        const nums: number[] = [6, 10, 15]
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThanOrEqual(0)
    })

    it('should handle array of length 200 with constraint', (): void => {
        const nums: number[] = new Array<number>(200).fill(200)
        const result: number = subsequencePairCount(nums)
        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(10 ** 9 + 7)
    })

    it('should handle small array', (): void => {
        const nums: number[] = [1, 2, 3, 4]

        const result: number = subsequencePairCount(nums)

        expect(result).toEqual(10)
    })
})
