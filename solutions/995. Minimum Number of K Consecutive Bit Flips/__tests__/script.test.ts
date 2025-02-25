import {minKBitFlips} from '../script'

describe('995. Minimum Number of K Consecutive Bit Flips', (): void => {

    it('Flip elements', (): void => {
        expect(minKBitFlips([0, 1, 0], 1))
            .toBe(2)
    })

    it('Cannot make', (): void => {
        expect(minKBitFlips([1, 1, 0], 2))
            .toBe(-1)
    })

    it('Flip sub-arrays', (): void => {
        expect(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3))
            .toBe(3)
    })
})

