import {isNumber} from '../script'

describe('65. Valid Number', (): void => {
    it('Valid integers', (): void => {
        expect(isNumber("2")).toBe(true)
        expect(isNumber("0089")).toBe(true)
        expect(isNumber("+123")).toBe(true)
        expect(isNumber("-456")).toBe(true)
    })

    it('Valid decimal numbers', (): void => {
        expect(isNumber("-0.1")).toBe(true)
        expect(isNumber("+3.14")).toBe(true)
        expect(isNumber("4.")).toBe(true)
        expect(isNumber("-.9")).toBe(true)
        expect(isNumber(".5")).toBe(true)
        expect(isNumber("0.0")).toBe(true)
    })

    it('Valid scientific notation', (): void => {
        expect(isNumber("2e10")).toBe(true)
        expect(isNumber("-90E3")).toBe(true)
        expect(isNumber("3e+7")).toBe(true)
        expect(isNumber("+6e-1")).toBe(true)
        expect(isNumber("53.5e93")).toBe(true)
        expect(isNumber("-123.456e789")).toBe(true)
        expect(isNumber("1E10")).toBe(true)
        expect(isNumber("4.e10")).toBe(true)
        expect(isNumber(".5e10")).toBe(true)
    })

    it('Invalid letters and mixed characters', (): void => {
        expect(isNumber("abc")).toBe(false)
        expect(isNumber("1a")).toBe(false)
        expect(isNumber("95a54e53")).toBe(false)
        expect(isNumber("e")).toBe(false)
        expect(isNumber("E")).toBe(false)
    })

    it('Invalid exponential notation', (): void => {
        expect(isNumber("1e")).toBe(false)
        expect(isNumber("e3")).toBe(false)
        expect(isNumber("99e2.5")).toBe(false)
        expect(isNumber("1e+")).toBe(false)
        expect(isNumber("1e-")).toBe(false)
        expect(isNumber("1ee10")).toBe(false)
        expect(isNumber("1e10e10")).toBe(false)
    })

    it('Invalid signs', (): void => {
        expect(isNumber("--6")).toBe(false)
        expect(isNumber("-+3")).toBe(false)
        expect(isNumber("+-3")).toBe(false)
        expect(isNumber("++3")).toBe(false)
        expect(isNumber("+")).toBe(false)
        expect(isNumber("-")).toBe(false)
    })

    it('Invalid decimal format', (): void => {
        expect(isNumber(".")).toBe(false)
        expect(isNumber("..")).toBe(false)
        expect(isNumber("1.2.3")).toBe(false)
        expect(isNumber("1..2")).toBe(false)
    })

    it('Edge cases', (): void => {
        expect(isNumber("")).toBe(false)
        expect(isNumber(" ")).toBe(false)
        expect(isNumber("0")).toBe(true)
        expect(isNumber("00")).toBe(true)
        expect(isNumber("1.0e0")).toBe(true)
        expect(isNumber(".1e1")).toBe(true)
    })
})
