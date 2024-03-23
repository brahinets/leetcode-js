import {findMinArrowShots} from '../script'

describe('452. Minimum Number of Arrows to Burst Balloons', (): void => {

    it('Several by same', (): void => {
        expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]))
            .toEqual(2)
    })

    it('Several by same #2', (): void => {
        expect(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]))
            .toEqual(2)
    })

    it('Every balloon separate', (): void => {
        expect(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]))
            .toEqual(4)
    })
})
