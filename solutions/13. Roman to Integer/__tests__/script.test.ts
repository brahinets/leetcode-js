import {romanToInt} from '../script'

describe('13. Roman to Integer', (): void => {
    it('Units', (): void => {
        expect(romanToInt("III"))
            .toBe(3)
    })

    it('Dozens', (): void => {
        expect(romanToInt("LVIII"))
            .toBe(58)
    })

    it('Grands', (): void => {
        expect(romanToInt("MCMXCIV"))
            .toBe(1994)
    })
})
