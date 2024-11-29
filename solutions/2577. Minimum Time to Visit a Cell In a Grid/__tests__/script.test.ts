import {minimumTime} from '../script'

describe('2577. Minimum Time to Visit a Cell In a Grid', (): void => {
    it('There is path', (): void => {
        expect(minimumTime([[0, 1, 3, 2], [5, 1, 2, 5], [4, 3, 8, 6]]))
            .toBe(7)
    })

    it('There is no path', (): void => {
        expect(minimumTime([[0, 2, 4], [3, 2, 1], [1, 0, 4]]))
            .toBe(-1)
    })
})
