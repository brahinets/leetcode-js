import {minimizeMax} from '../script'

describe('2616. Minimize the Maximum Difference of Pairs', (): void => {
    it('No diff for empty set', (): void => {
        expect(minimizeMax([], 1))
            .toBe(0)
    })

    it('No diff for zero pairs', (): void => {
        expect(minimizeMax([0, 5, 3, 4], 0))
            .toBe(0)
    })

    it('No diff for non empty set', (): void => {
        expect(minimizeMax([4, 2, 1, 2], 1))
            .toBe(0)
    })

    it('Has diff', (): void => {
        expect(minimizeMax([10, 1, 2, 7, 1, 3], 2))
            .toBe(1)
    })

    it('Has diff for the only pair', (): void => {
        expect(minimizeMax([1, 2], 1))
            .toBe(1)
    })

    it('Has diff for all pairs', (): void => {
        expect(minimizeMax([1, 1, 0, 3], 2))
            .toBe(2)
    })
})
