import { minSumOfLengths } from '../script'

describe('1477. Find Two Non-Overlapping Sub-arrays Each With Target Sum', (): void => {
    it('only one pair of single-element sub-arrays matches the target', (): void => {
        expect(minSumOfLengths([3, 2, 2, 4, 3], 3))
            .toBe(2)
    })

    it('shorter pair chosen over a longer non-overlapping alternative', (): void => {
        expect(minSumOfLengths([7, 3, 4, 7], 7))
            .toBe(2)
    })

    it('no second non-overlapping sub-array exists', (): void => {
        expect(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6))
            .toBe(-1)
    })

    it('no sub-array reaches the target sum at all', (): void => {
        expect(minSumOfLengths([5, 5, 4, 4, 5], 3))
            .toBe(-1)
    })

    it('best pair combines a later short match with an earlier one', (): void => {
        expect(minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3))
            .toBe(3)
    })

    it('single element array cannot form two sub-arrays', (): void => {
        expect(minSumOfLengths([1], 1))
            .toBe(-1)
    })

    it('entire array as one of the two sub-arrays leaves none for the other', (): void => {
        expect(minSumOfLengths([1, 1, 1, 1], 4))
            .toBe(-1)
    })

    it('overlapping candidate sub-arrays are skipped in favor of disjoint ones', (): void => {
        expect(minSumOfLengths([1, 1, 1, 1, 1], 2))
            .toBe(4)
    })
})
