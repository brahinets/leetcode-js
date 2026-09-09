import { countCommas } from '../script'

describe('3871. Count Commas in Range II', (): void => {
    it('range crossing into four-digit numbers', (): void => {
        expect(countCommas(1002)).toBe(3)
    })

    it('range entirely within three-digit numbers', (): void => {
        expect(countCommas(998)).toBe(0)
    })

    it('minimum possible input', (): void => {
        expect(countCommas(1)).toBe(0)
    })

    it('largest three-digit number', (): void => {
        expect(countCommas(999)).toBe(0)
    })

    it('smallest four-digit number', (): void => {
        expect(countCommas(1000)).toBe(1)
    })

    it('largest four-digit number', (): void => {
        expect(countCommas(9999)).toBe(9000)
    })

    it('smallest five-digit number', (): void => {
        expect(countCommas(10000)).toBe(9001)
    })

    it('largest six-digit number', (): void => {
        expect(countCommas(999999)).toBe(999000)
    })

    it('smallest seven-digit number', (): void => {
        expect(countCommas(1000000)).toBe(999002)
    })

    it('maximum possible input', (): void => {
        expect(countCommas(1000000000000000)).toBe(3998998998999005)
    })

    it('largest fifteen-digit number', (): void => {
        expect(countCommas(999999999999999)).toBe(3998998998999000)
    })
})
