import {nextBeautifulNumber} from '../script'

describe('2048. Next Greater Numerically Balanced Number', (): void => {
    it('All digits occur the same time', (): void => {
        expect(nextBeautifulNumber(1))
            .toBe(22)
    })

    it('Digits occur corresponding time', (): void => {
        expect(nextBeautifulNumber(1000))
            .toBe(1333)
    })

    it('Digits occur corresponding time #2', (): void => {
        expect(nextBeautifulNumber(3000))
            .toBe(3133)
    })
})
