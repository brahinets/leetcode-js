import {minimumTime} from '../script'

describe('2050. Parallel Courses III', (): void => {
    it('One', (): void => {
        expect(minimumTime(3, [[1, 3], [2, 3]], [3, 2, 5]))
            .toBe(8)
    })

    it('Two', (): void => {
        expect(minimumTime(5, [[1, 5], [2, 5], [3, 5], [3, 4], [4, 5]], [1, 2, 3, 4, 5]))
            .toBe(12)
    })
})
