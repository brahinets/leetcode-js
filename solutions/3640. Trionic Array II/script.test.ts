import { maxSumTrionic } from './script'

describe('3640. Trionic Array II', () => {
    it('Non positives', () => {
        expect(maxSumTrionic([0, -2, -1, -3, 0, 2, -1]))
            .toBe(-4)
    })

    it('Positives', () => {
        expect(maxSumTrionic([1, 4, 2, 7]))
            .toBe(14)
    })

    it('Minimum array size', () => {
        expect(maxSumTrionic([1, 2, 1, 2]))
            .toBe(6)
    })

    it('All negatives', () => {
        expect(maxSumTrionic([-5, -2, -8, -3]))
            .toBe(-18)
    })

    it('Large values', () => {
        expect(maxSumTrionic([1, 1000000000, 999999999, 1000000000]))
            .toBe(1 + 1000000000 + 999999999 + 1000000000)
    })

    it('Finds best subarray within larger array', () => {
        expect(maxSumTrionic([1, 2, 1, 3, 2, 5]))
            .toBe(11)
    })

    it('Picks best from overlapping patterns', () => {
        expect(maxSumTrionic([1, 3, 2, 4, 3, 5]))
            .toBe(14)
    })

    it('Equal adjacent elements break pattern', () => {
        expect(maxSumTrionic([1, 4, 2, 2, 3, 1, 2]))
            .toBe(8)
    })

    it('Ignores trailing down transition', () => {
        expect(maxSumTrionic([-960, 948, -693, 366, 137]))
            .toBe(-339)
    })

    it('Cannot extend past up-down-up', () => {
        expect(maxSumTrionic([35, 941, 281, 713, -160, 996]))
            .toBe(1970)
    })
})
