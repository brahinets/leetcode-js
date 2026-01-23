import { minimumPairRemoval } from '../script'

describe('3510. Minimum Pair Removal to Sort Array II', (): void => {
    it('Requires multiple merges to become non-decreasing', (): void => {
        expect(minimumPairRemoval([5, 2, 3, 1]))
            .toBe(2)
    })

    it('Already non-decreasing array needs no operations', (): void => {
        expect(minimumPairRemoval([1, 2, 2]))
            .toBe(0)
    })

    it('Handles single element array', (): void => {
        expect(minimumPairRemoval([1]))
            .toBe(0)
    })

    it('Handles two element decreasing array', (): void => {
        expect(minimumPairRemoval([2, 1]))
            .toBe(1)
    })

    it('Handles array requiring many merges', (): void => {
        expect(minimumPairRemoval([2, 2, -1, 3, -2, 2, 1, 1, 1, 0, -1]))
            .toBe(9)
    })

    it('Handles array requiring many merges', (): void => {
        expect(minimumPairRemoval([5, 3, 1, 2, 4]))
            .toBe(3)
    })
})
