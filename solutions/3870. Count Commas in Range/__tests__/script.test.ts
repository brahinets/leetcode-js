import { countCommas } from '../script'

describe('3870. Count Commas in Range', (): void => {
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

    it('maximum possible input', (): void => {
        expect(countCommas(100000)).toBe(99001)
    })
})
