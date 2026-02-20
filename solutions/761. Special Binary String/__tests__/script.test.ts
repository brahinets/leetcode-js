import { makeLargestSpecial } from '../script'

describe('761. Special Binary String', (): void => {
    it('Returns "11100100" for "11011000"', (): void => {
        expect(makeLargestSpecial('11011000')).toBe('11100100')
    })

    it('Returns "10" for "10"', (): void => {
        expect(makeLargestSpecial('10')).toBe('10')
    })

    it('Returns "1100" for "1100"', (): void => {
        expect(makeLargestSpecial('1100')).toBe('1100')
    })

    it('Returns "110010" for "101100"', (): void => {
        expect(makeLargestSpecial('101100')).toBe('110010')
    })

    it('Returns "111000" for "111000"', (): void => {
        expect(makeLargestSpecial('111000')).toBe('111000')
    })
})
