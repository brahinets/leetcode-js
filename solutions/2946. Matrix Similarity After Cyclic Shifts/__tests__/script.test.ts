import { areSimilar } from '../script'

describe('2946. Matrix Similarity After Cyclic Shifts', (): void => {
    it('false when matrix does not restore to original after k shifts', (): void => {
        expect(areSimilar([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4))
            .toBe(false)
    })

    it('true when matrix restores to original after k shifts', (): void => {
        expect(areSimilar([[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], 2))
            .toBe(true)
    })

    it('true when shift is a multiple of column count', (): void => {
        expect(areSimilar([[1, 2, 3], [4, 5, 6]], 3))
            .toBe(true)
    })

    it('true for single-column matrix with any k', (): void => {
        expect(areSimilar([[1], [2], [3]], 5))
            .toBe(true)
    })

    it('true for uniform row values where any shift is identity', (): void => {
        expect(areSimilar([[3, 3, 3], [7, 7, 7]], 2))
            .toBe(true)
    })

    it('false when even row is not periodic with given shift', (): void => {
        expect(areSimilar([[1, 2, 3, 4]], 1))
            .toBe(false)
    })
})
