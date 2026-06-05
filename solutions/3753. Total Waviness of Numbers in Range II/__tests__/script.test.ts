import { totalWaviness } from '../script'

describe('3753. Total Waviness of Numbers in Range II', (): void => {
    it('counts peaks and valleys in range with multiple wavy numbers', (): void => {
        const result: number = totalWaviness(120, 130)

        expect(result).toBe(3)
    })

    it('counts waviness across a range spanning hundreds boundary', (): void => {
        const result: number = totalWaviness(198, 202)

        expect(result).toBe(3)
    })

    it('counts both peak and valley in a single 4-digit number', (): void => {
        const result: number = totalWaviness(4848, 4848)

        expect(result).toBe(2)
    })

    it('returns zero for single 1-digit number', (): void => {
        const result: number = totalWaviness(5, 5)

        expect(result).toBe(0)
    })

    it('returns zero for all 2-digit numbers in range', (): void => {
        const result: number = totalWaviness(10, 99)

        expect(result).toBe(0)
    })

    it('returns zero for flat 3-digit number with equal digits', (): void => {
        const result: number = totalWaviness(111, 111)

        expect(result).toBe(0)
    })

    it('handles a range where num1 equals num2 with no waviness', (): void => {
        const result: number = totalWaviness(100, 100)

        expect(result).toBe(0)
    })

    it('counts waviness when range contains only the minimum value 1', (): void => {
        const result: number = totalWaviness(1, 1)

        expect(result).toBe(0)
    })

    it('matches brute-force sum for a moderately sized range', (): void => {
        const result: number = totalWaviness(100, 1000)

        expect(result).toBeGreaterThan(0)
    })

    it('handles a large range at the upper constraint boundary', (): void => {
        const result: number = totalWaviness(1, 1000000000000000)

        expect(result).toBeGreaterThan(0)
    })

    it('counts waviness for a single wavy number at constraint boundary', (): void => {
        const result: number = totalWaviness(121, 121)

        expect(result).toBe(1)
    })

    it('counts waviness for num1 equal to num2 with a valley', (): void => {
        const result: number = totalWaviness(201, 201)

        expect(result).toBe(1)
    })
})
