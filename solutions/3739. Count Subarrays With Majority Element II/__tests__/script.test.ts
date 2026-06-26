import { countMajoritySubarrays } from '../script'

describe('3739. Count Subarrays With Majority Element II', (): void => {
    it('counts subarrays when target appears as majority in mixed array', (): void => {
        const numbers: number[] = [1, 2, 2, 3]
        const target: number = 2

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe(5)
    })

    it('counts all subarrays when every element equals target', (): void => {
        const numbers: number[] = [1, 1, 1, 1]
        const target: number = 1

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe(10)
    })

    it('counts zero subarrays when target is absent', (): void => {
        const numbers: number[] = [1, 2, 3]
        const target: number = 4

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe(0)
    })

    it('counts one subarray for single-element array equal to target', (): void => {
        const numbers: number[] = [5]
        const target: number = 5

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe(1)
    })

    it('counts zero subarrays for single-element array not equal to target', (): void => {
        const numbers: number[] = [3]
        const target: number = 7

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe(0)
    })

    it('counts subarrays when target alternates with non-target elements', (): void => {
        const numbers: number[] = [1, 2, 1, 2, 1]
        const target: number = 1

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe(6)
    })

    it('handles large input efficiently', (): void => {
        const n: number = 100000
        const numbers: number[] = new Array<number>(n).fill(1)
        const target: number = 1

        const result: number = countMajoritySubarrays(numbers, target)

        expect(result).toBe((n * (n + 1)) / 2)
    })
})
