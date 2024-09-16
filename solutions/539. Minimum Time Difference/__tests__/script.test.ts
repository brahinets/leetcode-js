import {findMinDifference} from '../script'

describe('539. Minimum Time Difference', (): void => {
    it('Zero', (): void => {
        expect(findMinDifference(["00:00", "00:00"]))
            .toBe(0)
    })

    it('One', (): void => {
        expect(findMinDifference(["23:59", "00:00"]))
            .toBe(1)
    })

    it('More than one', (): void => {
        expect(findMinDifference(["00:01", "23:59", "00:03"]))
            .toBe(2)
    })
})
