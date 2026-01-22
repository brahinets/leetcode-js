import {minimumPairRemoval} from '../script'

describe('3507. Minimum Pair Removal to Sort Array I', (): void => {
    it('Requires multiple merges to become non-decreasing', (): void => {
        expect(minimumPairRemoval([5, 2, 3, 1])).toBe(2)
    })

    it('Already non-decreasing array needs no operations', (): void => {
        expect(minimumPairRemoval([1, 2, 2])).toBe(0)
    })
})
