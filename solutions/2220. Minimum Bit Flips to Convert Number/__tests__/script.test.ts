import {minBitFlips} from '../script'

describe('2220. Minimum Bit Flips to Convert Number', (): void => {
    it('Flip some', (): void => {
        expect(minBitFlips(10, 7))
            .toBe(3)
    })

    it('Flip all', (): void => {
        expect(minBitFlips(3, 4))
            .toBe(3)
    })

    it('Flip leading', (): void => {
        expect(minBitFlips(3, 10))
            .toBe(2)
    })
})
