import { gcdOfOddEvenSums } from '../script'

describe('3658. GCD of Odd and Even Sums', (): void => {
    it('returns 4 for n = 4', (): void => {
        const n: number = 4
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(4)
    })

    it('returns 5 for n = 5', (): void => {
        const n: number = 5
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(5)
    })

    it('returns 1 for n = 1', (): void => {
        const n: number = 1
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(1)
    })

    it('returns 2 for n = 2', (): void => {
        const n: number = 2
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(2)
    })

    it('returns 10 for n = 10', (): void => {
        const n: number = 10
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(10)
    })

    it('returns 100 for n = 100', (): void => {
        const n: number = 100
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(100)
    })

    it('returns 1000 for n = 1000 (maximum constraint)', (): void => {
        const n: number = 1000
        const result: number = gcdOfOddEvenSums(n)
        expect(result).toBe(1000)
    })
})
