import {queryResults} from '../script'

describe('3160. Find the Number of Distinct Colors Among the Balls', (): void => {
    it('One', (): void => {
        expect(queryResults(4, [[1, 4], [2, 5], [1, 3], [3, 4]]))
            .toEqual([1, 2, 2, 3])
    })

    it('Two', (): void => {
        expect(queryResults(4, [[0, 1], [1, 2], [2, 2], [3, 4], [4, 5]]))
            .toEqual([1, 2, 2, 3, 4])
    })
})
