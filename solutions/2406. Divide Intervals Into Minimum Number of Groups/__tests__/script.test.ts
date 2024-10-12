import {minGroups} from '../script'

describe('2406. Divide Intervals Into Minimum Number of Groups', (): void => {

    it('Multiple groups, some overlaps', (): void => {
        expect(minGroups([[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]))
            .toBe(3)
    })

    it('The same group, no overlaps', (): void => {
        expect(minGroups([[1, 3], [5, 6], [8, 10], [11, 13]]))
            .toBe(1)
    })
})
