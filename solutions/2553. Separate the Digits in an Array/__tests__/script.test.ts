import {separateDigits} from '../script'

describe('2553. Separate the Digits in an Array', (): void => {
    it('separates multi-digit numbers in order', (): void => {
        const numbers: number[] = [13, 25, 83, 77]

        const result: number[] = separateDigits(numbers)

        expect(result).toEqual([1, 3, 2, 5, 8, 3, 7, 7])
    })

    it('keeps single-digit numbers unchanged', (): void => {
        const numbers: number[] = [7, 1, 3, 9]

        const result: number[] = separateDigits(numbers)

        expect(result).toEqual([7, 1, 3, 9])
    })

    it('handles a number at the upper constraint boundary', (): void => {
        const numbers: number[] = [100000]

        const result: number[] = separateDigits(numbers)

        expect(result).toEqual([1, 0, 0, 0, 0, 0])
    })

    it('handles a single element array', (): void => {
        const numbers: number[] = [42]

        const result: number[] = separateDigits(numbers)

        expect(result).toEqual([4, 2])
    })

    it('handles mixed single and multi-digit numbers', (): void => {
        const numbers: number[] = [1, 12, 123]

        const result: number[] = separateDigits(numbers)

        expect(result).toEqual([1, 1, 2, 1, 2, 3])
    })
})
