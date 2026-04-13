import { getMinDistance } from '../script'

describe('1848. Minimum Distance to the Target Element', (): void => {
    it('returns 0 when target is at start index', (): void => {
        expect(getMinDistance([1, 2, 3, 4, 5], 4, 3)).toBe(0)
    })

    it('returns 1 when target is one step away from start', (): void => {
        expect(getMinDistance([1, 2, 3, 4, 5], 5, 3)).toBe(1)
    })

    it('returns 0 when closest occurrence of target is at start', (): void => {
        expect(getMinDistance([2, 5, 3, 2, 5], 5, 4)).toBe(0)
    })

    it('returns distance to single occurrence at beginning', (): void => {
        expect(getMinDistance([1, 2, 3, 4, 5], 1, 4)).toBe(4)
    })

    it('returns equal distance when target appears equidistant on both sides', (): void => {
        expect(getMinDistance([5, 1, 2, 1, 5], 5, 2)).toBe(2)
    })
})