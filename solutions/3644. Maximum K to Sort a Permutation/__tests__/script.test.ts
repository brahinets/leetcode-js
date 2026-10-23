import { sortPermutation } from '../script'

describe('3644. Maximum K to Sort a Permutation', (): void => {
    it('misplaced elements sharing the lowest bit allow k of one', (): void => {
        const numbers: number[] = [0, 3, 2, 1]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(1)
    })

    it('misplaced elements sharing the second bit allow k of two', (): void => {
        const numbers: number[] = [0, 1, 3, 2]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(2)
    })

    it('misplaced elements with no common bits allow only k of zero', (): void => {
        const numbers: number[] = [3, 2, 1, 0]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(0)
    })

    it('already sorted array yields zero', (): void => {
        const numbers: number[] = [0, 1, 2, 3, 4]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(0)
    })

    it('single element array is already sorted', (): void => {
        const numbers: number[] = [0]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(0)
    })

    it('swapped pair containing zero allows only k of zero', (): void => {
        const numbers: number[] = [1, 0]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(0)
    })

    it('misplaced elements sharing multiple bits allow their full common mask', (): void => {
        const numbers: number[] = [0, 1, 2, 3, 4, 5, 7, 6]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(6)
    })

    it('cycle of three misplaced elements uses their common bits', (): void => {
        const numbers: number[] = [0, 1, 2, 3, 4, 7, 5, 6]

        const result: number = sortPermutation(numbers)

        expect(result)
            .toBe(4)
    })
})
