import {reverseBits} from '../script'

describe('190. Reverse Bits', (): void => {

    it('Has leading zeros', (): void => {
        expect(reverseBits(0b00000010100101000001111010011100))
            .toBe(964176192)
    })

    it('No leading zeros', (): void => {
        expect(reverseBits(0b11111111111111111111111111111101))
            .toBe(3221225471)
    })
})
