import { minimumDistance } from '../script'

describe('3761. Minimum Absolute Distance Between Mirror Pairs', (): void => {

    it('returns minimum distance when multiple mirror pairs exist', (): void => {
        expect(minimumDistance([12, 21, 45, 33, 54])).toBe(1)
    })

    it('returns distance of one when mirror pair is adjacent with leading zero reversal', (): void => {
        expect(minimumDistance([120, 21])).toBe(1)
    })

    it('returns negative one when no mirror pairs exist', (): void => {
        expect(minimumDistance([21, 120])).toBe(-1)
    })

    it('returns negative one when array has single element', (): void => {
        expect(minimumDistance([12])).toBe(-1)
    })

    it('returns distance between palindrome pair that mirrors itself', (): void => {
        expect(minimumDistance([33, 44, 33])).toBe(2)
    })

    it('returns minimum distance when closer mirror pair exists among several', (): void => {
        expect(minimumDistance([45, 12, 21, 54])).toBe(1)
    })

})
