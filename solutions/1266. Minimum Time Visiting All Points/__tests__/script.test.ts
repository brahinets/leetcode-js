import {minTimeToVisitAllPoints} from '../script'

describe('1266. Minimum Time Visiting All Points', (): void => {
    it('Zero segments', (): void => {
        expect(minTimeToVisitAllPoints([[3, 2]]))
            .toBe(0)
    })

    it('One segment', (): void => {
        expect(minTimeToVisitAllPoints([[3, 2], [-2, 2]]))
            .toBe(5)
    })

    it('Two segments', (): void => {
        expect(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]))
            .toBe(7)
    })
})
