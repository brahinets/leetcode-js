import { getMinDistance } from '../script'

describe('1848. Minimum Distance to the Target Element', (): void => {
    it('target at start index', (): void => {
        expect(getMinDistance([1, 2, 3, 4, 5], 4, 3)).toBe(0)
    })

    it('target one step away from start', (): void => {
        expect(getMinDistance([1, 2, 3, 4, 5], 5, 3)).toBe(1)
    })

    it('target has multiple occurrences and one is at start', (): void => {
        expect(getMinDistance([2, 5, 3, 2, 5], 5, 4)).toBe(0)
    })

    it('target has single occurrence far from start', (): void => {
        expect(getMinDistance([1, 2, 3, 4, 5], 1, 4)).toBe(4)
    })

    it('target appears equidistant on both sides of start', (): void => {
        expect(getMinDistance([5, 1, 2, 1, 5], 5, 2)).toBe(2)
    })
})