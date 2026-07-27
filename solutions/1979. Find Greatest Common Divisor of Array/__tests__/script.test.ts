import { findGCD } from '../script'

describe('1979. Find Greatest Common Divisor of Array', (): void => {
    it('smallest divides the largest', (): void => {
        const nums: number[] = [2, 5, 6, 9, 10]

        const result: number = findGCD(nums)

        expect(result)
            .toBe(2)
    })

    it('coprime extremes yield one', (): void => {
        const nums: number[] = [7, 5, 6, 8, 3]

        const result: number = findGCD(nums)

        expect(result)
            .toBe(1)
    })

    it('all elements identical', (): void => {
        const nums: number[] = [3, 3]

        const result: number = findGCD(nums)

        expect(result)
            .toBe(3)
    })

    it('extremes at the ends of an unsorted array', (): void => {
        const nums: number[] = [12, 4, 8, 24, 6]

        const result: number = findGCD(nums)

        expect(result)
            .toBe(4)
    })

    it('smallest value is one', (): void => {
        const nums: number[] = [1, 1000]

        const result: number = findGCD(nums)

        expect(result)
            .toBe(1)
    })

    it('two elements where one divides the other', (): void => {
        const nums: number[] = [9, 3]

        const result: number = findGCD(nums)

        expect(result)
            .toBe(3)
    })
})
