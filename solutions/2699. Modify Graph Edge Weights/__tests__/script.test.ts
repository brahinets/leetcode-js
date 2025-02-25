import {modifiedGraphEdges} from '../script'

describe('2699. Modify Graph Edge Weights', (): void => {
    it('Not possible', (): void => {
        expect(modifiedGraphEdges(3, [[0, 1, -1], [0, 2, 5]], 0, 2, 6))
            .toEqual([])
    })

    it('One', (): void => {
        expect(modifiedGraphEdges(5, [[4, 1, -1], [2, 0, -1], [0, 3, -1], [4, 3, -1]], 0, 1, 5))
            .toEqual([[4, 1, 1], [2, 0, 1], [0, 3, 1], [4, 3, 3]])
    })

    it('Two', (): void => {
        expect(modifiedGraphEdges(4, [[1, 0, 4], [1, 2, 3], [2, 3, 5], [0, 3, -1]], 0, 2, 6))
            .toEqual([[1, 0, 4], [1, 2, 3], [2, 3, 5], [0, 3, 1]])
    })
})
