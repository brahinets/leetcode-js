import { sumOfSquares } from '../script'

describe('2778. Sum of Squares of Special Elements', (): void => {
    it('length with several divisors', (): void => {
        const nums: number[] = [1, 2, 3, 4]

        const result: number = sumOfSquares(nums)

        expect(result)
            .toBe(21)
    })

    it('length with many divisors', (): void => {
        const nums: number[] = [2, 7, 1, 19, 18, 3]

        const result: number = sumOfSquares(nums)

        expect(result)
            .toBe(63)
    })

    it('single element is always special', (): void => {
        const nums: number[] = [5]

        const result: number = sumOfSquares(nums)

        expect(result)
            .toBe(25)
    })

    it('prime length makes only first and last elements special', (): void => {
        const nums: number[] = [3, 10, 10, 10, 4]

        const result: number = sumOfSquares(nums)

        expect(result)
            .toBe(25)
    })

    it('maximum length with maximum values', (): void => {
        const nums: number[] = new Array<number>(50).fill(50)

        const result: number = sumOfSquares(nums)

        expect(result)
            .toBe(15000)
    })
})
