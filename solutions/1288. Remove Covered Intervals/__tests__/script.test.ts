import {removeCoveredIntervals} from '../script'

describe('1288. Remove Covered Intervals', (): void => {
    it('middle interval covered by a later, wider interval', (): void => {
        expect(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]))
            .toBe(2)
    })

    it('shorter interval covered by an interval sharing its start', (): void => {
        expect(removeCoveredIntervals([[1, 4], [2, 3]]))
            .toBe(1)
    })

    it('single interval', (): void => {
        expect(removeCoveredIntervals([[0, 5]]))
            .toBe(1)
    })

    it('no interval covered by any other', (): void => {
        expect(removeCoveredIntervals([[1, 2], [3, 4], [5, 6]]))
            .toBe(3)
    })

    it('identical start with the widest interval appearing last', (): void => {
        expect(removeCoveredIntervals([[1, 5], [1, 3], [1, 8]]))
            .toBe(1)
    })

    it('identical end with a narrower interval starting later', (): void => {
        expect(removeCoveredIntervals([[1, 8], [3, 8], [2, 8]]))
            .toBe(1)
    })

    it('chain of intervals each covering the previous one', (): void => {
        expect(removeCoveredIntervals([[1, 10], [2, 9], [3, 8], [4, 7]]))
            .toBe(1)
    })
})
