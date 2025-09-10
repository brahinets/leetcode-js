import {minimumTeachings} from '../script'

describe('1733. Minimum Number of People to Teach', (): void => {
    it('One', (): void => {
        expect(minimumTeachings(2, [[1], [2], [1, 2]], [[1, 2], [1, 3], [2, 3]]))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(minimumTeachings(3, [[2], [1, 3], [1, 2], [3]], [[1, 4], [1, 2], [3, 4], [2, 3]]))
            .toBe(2)
    })
})
