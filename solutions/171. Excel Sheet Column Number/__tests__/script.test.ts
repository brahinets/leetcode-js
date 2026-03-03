import { titleToNumber } from '../script'

describe('171. Excel Sheet Column Number', (): void => {
    it('First column', (): void => {
        expect(titleToNumber('A'))
            .toBe(1)
    })

    it('Second column', (): void => {
        expect(titleToNumber('B'))
            .toBe(2)
    })

    it('Last single-letter column', (): void => {
        expect(titleToNumber('Z'))
            .toBe(26)
    })

    it('First double-letter column', (): void => {
        expect(titleToNumber('AA'))
            .toBe(27)
    })

    it('Second double-letter column', (): void => {
        expect(titleToNumber('AB'))
            .toBe(28)
    })

    it('Big column', (): void => {
        expect(titleToNumber('ZY'))
            .toBe(701)
    })
})
