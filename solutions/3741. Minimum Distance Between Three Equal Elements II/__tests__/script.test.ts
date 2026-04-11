import { minimumDistance } from '../script'

describe('3741. Minimum Distance Between Three Equal Elements II', (): void => {
    it('returns minimum distance for three equal elements at indices 0, 2, 3', (): void => {
        expect(minimumDistance([1, 2, 1, 1, 3])).toBe(6)
    })

    it('returns minimum distance across multiple values with three occurrences', (): void => {
        expect(minimumDistance([1, 1, 2, 3, 2, 1, 2])).toBe(8)
    })

    it('returns -1 when no value appears three or more times', (): void => {
        expect(minimumDistance([1])).toBe(-1)
    })

    it('returns -1 when each value appears fewer than three times', (): void => {
        expect(minimumDistance([1, 2, 1, 2])).toBe(-1)
    })

    it('returns correct distance for three consecutive equal elements', (): void => {
        expect(minimumDistance([5, 5, 5])).toBe(4)
    })

    it('picks the optimal triple when more than three occurrences exist', (): void => {
        expect(minimumDistance([1, 1, 1, 1])).toBe(4)
    })

    it('returns correct distance for minimum spread triple among many', (): void => {
        expect(minimumDistance([3, 1, 3, 3, 3])).toBe(4)
    })
})
