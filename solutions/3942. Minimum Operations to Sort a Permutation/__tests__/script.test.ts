import { minOperations } from '../script'

describe('3942. Minimum Operations to Sort a Permutation', (): void => {
    it('rotation left followed by reversal sorts the array in two operations', (): void => {
        const numbers: number[] = [0, 2, 1]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(2)
    })

    it('reversal followed by rotation left sorts the array in two operations', (): void => {
        const numbers: number[] = [1, 0, 2]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(2)
    })

    it('array unreachable by rotations and reversals cannot be sorted', (): void => {
        const numbers: number[] = [2, 0, 1, 3]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(-1)
    })

    it('already sorted array needs no operations', (): void => {
        const numbers: number[] = [0, 1, 2, 3]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(0)
    })

    it('descending array is sorted by a single reversal', (): void => {
        const numbers: number[] = [2, 1, 0]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(1)
    })

    it('rotating the minimum to the front costs one operation per shift', (): void => {
        const numbers: number[] = [1, 2, 0]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(2)
    })

    it('two element array in swapped order is sorted by a single reversal', (): void => {
        const numbers: number[] = [1, 0]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(1)
    })

    it('large rotation replaced by reversal rotation reversal costs three operations', (): void => {
        const numbers: number[] = [1, 2, 3, 4, 0]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(3)
    })

    it('single element array is already sorted', (): void => {
        const numbers: number[] = [0]

        const result: number = minOperations(numbers)

        expect(result)
            .toBe(0)
    })
})
