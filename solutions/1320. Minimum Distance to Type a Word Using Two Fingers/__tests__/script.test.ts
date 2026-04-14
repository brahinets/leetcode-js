import { minimumDistance } from '../script'

describe('1320. Minimum Distance to Type a Word Using Two Fingers', (): void => {
    it('distance of 3 for word CAKE', (): void => {
        expect(minimumDistance('CAKE')).toBe(3)
    })

    it('distance of 6 for word HAPPY', (): void => {
        expect(minimumDistance('HAPPY')).toBe(6)
    })

    it('distance of 0 for single character word', (): void => {
        expect(minimumDistance('A')).toBe(0)
    })

    it('distance of 0 for repeated identical characters', (): void => {
        expect(minimumDistance('AA')).toBe(0)
    })

    it('distance of 0 for two-character word where each finger can be placed freely', (): void => {
        expect(minimumDistance('AB')).toBe(0)
    })

    it('distance of 1 for three sequential letters where optimal split saves one move', (): void => {
        expect(minimumDistance('ABC')).toBe(1)
    })
})
