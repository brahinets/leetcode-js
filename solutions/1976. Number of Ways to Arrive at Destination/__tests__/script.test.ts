import {countPaths} from '../script'

describe('1976. Number of Ways to Arrive at Destination', (): void => {
    it('Many', (): void => {
        expect(countPaths(7, [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]]))
            .toBe(4)
    })

    it('The only', (): void => {
        expect(countPaths(2, [[1, 0, 10]]))
            .toBe(1)
    })
})
