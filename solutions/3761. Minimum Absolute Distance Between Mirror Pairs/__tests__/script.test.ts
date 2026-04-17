import { minMirrorPairDistance } from '../script'

describe('3761. Minimum Absolute Distance Between Mirror Pairs', (): void => {

    it('multiple mirror pairs picks minimum distance', (): void => {
        expect(minMirrorPairDistance([12, 21, 45, 33, 54]))
            .toBe(1)
    })

    it('reversed number with leading zeros matches adjacent element', (): void => {
        expect(minMirrorPairDistance([120, 21]))
            .toBe(1)
    })

    it('no mirror pairs', (): void => {
        expect(minMirrorPairDistance([21, 120]))
            .toBe(-1)
    })

    it('single element', (): void => {
        expect(minMirrorPairDistance([12]))
            .toBe(-1)
    })

    it('palindrome mirrors itself forming a pair', (): void => {
        expect(minMirrorPairDistance([33, 44, 33]))
            .toBe(2)
    })

    it('closer mirror pair among several pairs wins', (): void => {
        expect(minMirrorPairDistance([45, 12, 21, 54]))
            .toBe(1)
    })

})
