import {intToRoman} from '../script'

describe('12. Integer to Roman', (): void => {
    it('Units', (): void => {
        expect(intToRoman(3))
            .toBe("III")
    })

    it('Dozens', (): void => {
        expect(intToRoman(58))
            .toBe("LVIII")
    })

    it('Grands', (): void => {
        expect(intToRoman(1994))
            .toBe("MCMXCIV")
    })
})
