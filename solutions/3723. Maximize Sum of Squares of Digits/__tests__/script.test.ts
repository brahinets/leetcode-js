import { maxSumOfSquares } from '../script'

describe('3723. Maximize Sum of Squares of Digits', (): void => {
    it('remainder digit followed by zero', (): void => {
        const num: number = 2
        const sum: number = 3

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('30')
    })

    it('nine followed by remainder digit', (): void => {
        const num: number = 2
        const sum: number = 17

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('98')
    })

    it('single digit cannot reach the sum', (): void => {
        const num: number = 1
        const sum: number = 10

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('')
    })

    it('single digit matches the sum', (): void => {
        const num: number = 1
        const sum: number = 7

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('7')
    })

    it('sum divisible by nine fills leading nines then zeros', (): void => {
        const num: number = 4
        const sum: number = 18

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('9900')
    })

    it('every digit is nine', (): void => {
        const num: number = 3
        const sum: number = 27

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('999')
    })

    it('sum exceeds the maximum reachable by one', (): void => {
        const num: number = 3
        const sum: number = 28

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('')
    })

    it('sum equal to one produces leading one', (): void => {
        const num: number = 5
        const sum: number = 1

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('10000')
    })

    it('maximum length with maximum reachable sum', (): void => {
        const num: number = 200000
        const sum: number = 1800000

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('9'.repeat(200000))
    })

    it('maximum sum beyond what maximum length can hold', (): void => {
        const num: number = 200000
        const sum: number = 2000000

        const result: string = maxSumOfSquares(num, sum)

        expect(result)
            .toBe('')
    })
})
