import { hasAlternatingBits } from '../script'

describe('693. Binary Number with Alternating Bits', (): void => {
    it('Returns true for 5 (binary: 101)', (): void => {
        expect(hasAlternatingBits(5)).toBe(true)
    })

    it('Returns false for 7 (binary: 111)', (): void => {
        expect(hasAlternatingBits(7)).toBe(false)
    })

    it('Returns false for 11 (binary: 1011)', (): void => {
        expect(hasAlternatingBits(11)).toBe(false)
    })

    it('Returns true for 10 (binary: 1010)', (): void => {
        expect(hasAlternatingBits(10)).toBe(true)
    })
})
