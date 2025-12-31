import {latestDayToCross} from '../script'

describe('1970. Last Day Where You Can Still Cross', (): void => {
    it('Only first day', (): void => {
        expect(latestDayToCross(2, 2, [[1, 1], [1, 2], [2, 1], [2, 2]]))
            .toBe(1)
    })

    it('Few days', (): void => {
        expect(latestDayToCross(2, 2, [[1, 1], [2, 1], [1, 2], [2, 2]]))
            .toBe(2)
    })

    it('Many days', (): void => {
        expect(latestDayToCross(3, 3, [[1, 2], [2, 1], [3, 3], [2, 2], [1, 1], [1, 3], [2, 3], [3, 2], [3, 1]]))
            .toBe(3)
    })
})
