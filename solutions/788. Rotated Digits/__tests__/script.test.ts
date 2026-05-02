import { rotatedDigits } from '../script'

describe('788. Rotated Digits', (): void => {
    it('all digits self-rotate', (): void => {
        expect(rotatedDigits(1)).toBe(0)
    })

    it('first changing digit', (): void => {
        expect(rotatedDigits(2)).toBe(1)
    })

    it('invalid digit excluded', (): void => {
        expect(rotatedDigits(3)).toBe(1)
    })

    it('problem example', (): void => {
        expect(rotatedDigits(10)).toBe(4)
    })

    it('multi-digit good numbers', (): void => {
        expect(rotatedDigits(25)).toBe(12)
    })
})
