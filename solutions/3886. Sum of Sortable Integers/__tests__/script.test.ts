import { sortableIntegers } from '../script'

describe('3886. Sum of Sortable Integers', (): void => {
    it('whole array rotatable as a single block', (): void => {
        const nums: number[] = [3, 1, 2]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(3)
    })

    it('array that no rotation can sort', (): void => {
        const nums: number[] = [7, 6, 5]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(0)
    })

    it('already sorted array makes every divisor sortable', (): void => {
        const nums: number[] = [5, 8]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(3)
    })

    it('single element array is always sortable by one', (): void => {
        const nums: number[] = [5]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(1)
    })

    it('sorted array of length four sums all its divisors', (): void => {
        const nums: number[] = [1, 2, 3, 4]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(7)
    })

    it('swap pair sortable only by the full length block', (): void => {
        const nums: number[] = [2, 1]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(2)
    })

    it('duplicated values sortable only as one whole block', (): void => {
        const nums: number[] = [2, 2, 1, 1]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(4)
    })

    it('pairs sortable only when block size covers each swapped pair', (): void => {
        const nums: number[] = [2, 1, 4, 3, 6, 5]

        const result: number = sortableIntegers(nums)

        expect(result).toBe(2)
    })
})
