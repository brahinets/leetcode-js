import { digitSum } from '../script'

describe('2243. Calculate Digit Sum of a String', (): void => {
    it('performs two rounds for the first example configuration', (): void => {
        const input: string = '11111222223'
        const groupSize: number = 3

        const result: string = digitSum(input, groupSize)

        expect(result).toBe('135')
    })

    it('produces leading zeros for the second example configuration', (): void => {
        const input: string = '00000000'
        const groupSize: number = 3

        const result: string = digitSum(input, groupSize)

        expect(result).toBe('000')
    })

    it('keeps the string unchanged when its length equals the group size', (): void => {
        const input: string = '12345'
        const groupSize: number = 5

        const result: string = digitSum(input, groupSize)

        expect(result).toBe('12345')
    })

    it('keeps the string unchanged when its length is below the group size', (): void => {
        const input: string = '12345'
        const groupSize: number = 6

        const result: string = digitSum(input, groupSize)

        expect(result).toBe('12345')
    })

    it('handles a single character string', (): void => {
        const input: string = '9'
        const groupSize: number = 2

        const result: string = digitSum(input, groupSize)

        expect(result).toBe('9')
    })

    it('handles groups whose sum is multi-digit repeatedly', (): void => {
        const input: string = '99999999'
        const groupSize: number = 2

        const result: string = digitSum(input, groupSize)

        expect(result).toBe('99')
    })
})
