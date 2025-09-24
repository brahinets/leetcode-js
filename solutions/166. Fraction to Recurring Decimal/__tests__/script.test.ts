import {fractionToDecimal} from '../script'

describe('166. Fraction to Recurring Decimal', (): void => {
    it('Float. Simple', (): void => {
        expect(fractionToDecimal(1, 2))
            .toBe("0.5")
    })

    it('Float. Complex', (): void => {
        expect(fractionToDecimal(4, 333))
            .toBe("0.(012)")
    })
    it('Integer. Simple', (): void => {
        expect(fractionToDecimal(2, 1))
            .toBe("2")
    })

    it('Integer. Complex', (): void => {
        expect(fractionToDecimal(4, 2))
            .toBe("2")
    })

    it('Negative', (): void => {
        expect(fractionToDecimal(-4, 2))
            .toBe("-2")
    })
})
