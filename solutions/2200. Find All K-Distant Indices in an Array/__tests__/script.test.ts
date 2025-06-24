import {findKDistantIndices} from '../script'

describe('2200. Find All K-Distant Indices in an Array', (): void => {
    it('One', (): void => {
        expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1))
            .toEqual([1, 2, 3, 4, 5, 6])
    })

    it('Two', (): void => {
        expect(findKDistantIndices([2, 2, 2, 2, 2], 2, 2))
            .toEqual([0, 1, 2, 3, 4])
    })
})
