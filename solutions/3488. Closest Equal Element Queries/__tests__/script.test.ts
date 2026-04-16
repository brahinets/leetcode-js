import { solveQueries } from '../script'

describe('3488. Closest Equal Element Queries', (): void => {

    it('returns minimum circular distance to the nearest equal element', (): void => {
        expect(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5]))
            .toEqual([2, -1, 3])
    })

    it('returns negative one for each query when all elements are unique', (): void => {
        expect(solveQueries([1, 2, 3, 4], [0, 1, 2, 3]))
            .toEqual([-1, -1, -1, -1])
    })

    it('returns distance one when adjacent elements are equal', (): void => {
        expect(solveQueries([1, 1, 1, 1], [0, 1, 2, 3]))
            .toEqual([1, 1, 1, 1])
    })

    it('uses wrap-around path when it is shorter than direct path', (): void => {
        expect(solveQueries([1, 2, 1], [0]))
            .toEqual([1])
    })

    it('uses direct path when it is shorter than wrap-around path', (): void => {
        expect(solveQueries([1, 2, 1, 3, 3, 3], [2]))
            .toEqual([2])
    })

    it('handles single element array returning negative one', (): void => {
        expect(solveQueries([5], [0]))
            .toEqual([-1])
    })

    it('returns shortest circular distance among multiple occurrences', (): void => {
        expect(solveQueries([3, 1, 3, 1, 3], [2]))
            .toEqual([2])
    })

})
