import {resultsArray} from '../script'

describe('3254. Find the Power of K-Size Subarrays I', (): void => {
    it('One sub-array', (): void => {
        expect(resultsArray([1, 2, 3, 4, 3, 2, 5], 3))
            .toEqual([3, 4, -1, -1, -1])
    })

    it('No sub-arrays', (): void => {
        expect(resultsArray([2, 2, 2, 2, 2], 4))
            .toEqual([-1, -1])
    })

    it('Multiple sub-arrays', (): void => {
        expect(resultsArray([3, 2, 3, 2, 3, 2], 2))
            .toEqual([-1, 3, -1, 3, -1])
    })
})
