import { decodeCiphertext } from '../script'

describe('2075. Decode the Slanted Ciphertext', (): void => {
    it('returns encoded text unchanged when rows is one', (): void => {
        expect(decodeCiphertext('coding', 1))
            .toBe('coding')
    })

    it('decodes three-row slanted ciphertext', (): void => {
        expect(decodeCiphertext('ch   ie   pr', 3))
            .toBe('cipher')
    })

    it('decodes four-row slanted ciphertext with spaces in original text', (): void => {
        expect(decodeCiphertext('iveo    eed   l te   olc', 4))
            .toBe('i love leetcode')
    })
})
