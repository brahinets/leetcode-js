import { gcdValues } from '../script'

describe('3312. Sorted GCD Pair Queries', (): void => {
    it('example 1: small array with multiple queries', (): void => {
        const nums: number[] = [2, 3, 4]
        const queries: number[] = [0, 2, 2]
        const expected: number[] = [1, 2, 2]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })

    it('example 2: array with duplicate values', (): void => {
        const nums: number[] = [4, 4, 2, 1]
        const queries: number[] = [5, 3, 1, 0]
        const expected: number[] = [4, 2, 1, 1]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })

    it('example 3: minimal array with two identical elements', (): void => {
        const nums: number[] = [2, 2]
        const queries: number[] = [0, 0]
        const expected: number[] = [2, 2]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })

    it('single pair with GCD of 1', (): void => {
        const nums: number[] = [3, 5]
        const queries: number[] = [0]
        const expected: number[] = [1]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })

    it('all numbers are coprime', (): void => {
        const nums: number[] = [2, 3, 5, 7]
        const queries: number[] = [0, 1, 2, 3, 4, 5]
        const expected: number[] = [1, 1, 1, 1, 1, 1]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })

    it('all numbers share common factors', (): void => {
        const nums: number[] = [6, 12, 18]
        const queries: number[] = [0, 1, 2]
        const expected: number[] = [6, 6, 6]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })

    it('mixed array with various GCD values', (): void => {
        const nums: number[] = [10, 15, 20]
        const queries: number[] = [0, 1, 2]
        const expected: number[] = [5, 5, 10]

        const result: number[] = gcdValues(nums, queries)

        expect(result).toEqual(expected)
    })
})
