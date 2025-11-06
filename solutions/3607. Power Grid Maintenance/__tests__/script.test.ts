import {processQueries} from '../script'

describe('3607. Power Grid Maintenance', (): void => {
    it('One', (): void => {
        expect(processQueries(5, [[1, 2], [2, 3], [3, 4], [4, 5]], [[1, 3], [2, 1], [1, 1], [2, 2], [1, 2]]))
            .toEqual([3, 2, 3])
    })

    it('Two', (): void => {
        expect(processQueries(3, [], [[1, 1], [2, 1], [1, 1]]))
            .toEqual([1, -1])
    })

    it('Three', (): void => {
        expect(processQueries(5, [[1, 2], [2, 3], [3, 4], [4, 5]], [[1, 3], [2, 1], [1, 1], [2, 2], [1, 2]]))
            .toEqual([3, 2, 3])
    })
})
