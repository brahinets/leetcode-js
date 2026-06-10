import {maxTotalValue} from '../script'

describe('3691. Maximum Total Subarray Value II', (): void => {
    it('sums the two largest distinct subarray values', (): void => {
        const numbers: number[] = [1, 3, 2]
        const k: number = 2

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(4)
    })

    it('picks three distinct subarrays sharing the same range', (): void => {
        const numbers: number[] = [4, 2, 5, 1]
        const k: number = 3

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(12)
    })

    it('produces zero when all elements are identical', (): void => {
        const numbers: number[] = [7, 7, 7]
        const k: number = 6

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(0)
    })

    it('single element array yields zero value', (): void => {
        const numbers: number[] = [42]
        const k: number = 1

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(0)
    })

    it('picks the single best subarray when k equals one', (): void => {
        const numbers: number[] = [3, 1, 4, 1, 5, 9]
        const k: number = 1

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(8)
    })

    it('selects every distinct subarray when k covers them all', (): void => {
        const numbers: number[] = [4, 2, 5, 1]
        const k: number = 10

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(20)
    })

    it('mixes full-value picks above the threshold with threshold-valued picks', (): void => {
        const numbers: number[] = [1, 5, 2]
        const k: number = 2

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(8)
    })

    it('handles two elements at the constraint boundaries', (): void => {
        const numbers: number[] = [0, 1000000000]
        const k: number = 1

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(1000000000)
    })

    it('matches brute force on a varied array', (): void => {
        const numbers: number[] = [5, 1, 7, 3, 9, 2, 6]
        const k: number = 8

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(bruteForce(numbers, k))
    })

    it('matches brute force when the threshold value repeats', (): void => {
        const numbers: number[] = [2, 8, 4, 8, 1, 8, 5]
        const k: number = 12

        const result: number = maxTotalValue(numbers, k)

        expect(result).toBe(bruteForce(numbers, k))
    })
})

function bruteForce(numbers: number[], k: number): number {
    const values: number[] = []
    for (let left: number = 0; left < numbers.length; left++) {
        let maximum: number = numbers[left]
        let minimum: number = numbers[left]
        for (let right: number = left; right < numbers.length; right++) {
            maximum = Math.max(maximum, numbers[right])
            minimum = Math.min(minimum, numbers[right])
            values.push(maximum - minimum)
        }
    }

    values.sort((first: number, second: number): number => second - first)

    let total: number = 0
    for (let index: number = 0; index < k; index++) {
        total += values[index]
    }

    return total
}
