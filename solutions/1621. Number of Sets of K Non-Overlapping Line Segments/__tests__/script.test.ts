import {numberOfSets} from '../script'

describe('1621. Number of Sets of K Non-Overlapping Line Segments', (): void => {
    it('four points split into two segments', (): void => {
        expect(numberOfSets(4, 2))
            .toBe(5)
    })

    it('three points with a single segment', (): void => {
        expect(numberOfSets(3, 1))
            .toBe(3)
    })

    it('result requires modulo reduction', (): void => {
        expect(numberOfSets(30, 7))
            .toBe(796297179)
    })

    it('minimum number of points with the only possible segment', (): void => {
        expect(numberOfSets(2, 1))
            .toBe(1)
    })

    it('maximum segment count equal to number of gaps between points', (): void => {
        expect(numberOfSets(5, 4))
            .toBe(1)
    })
})
