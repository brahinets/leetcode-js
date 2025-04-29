import {fourSum} from '../script'

describe('18. 4Sum', (): void => {
    it('Sub-arrays', (): void => {
        expect(fourSum([1, 0, -1, 0, -2, 2], 0))
            .toEqual([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
    })

    it('Entire array', (): void => {
        expect(fourSum([2, 2, 2, 2, 2], 8))
            .toEqual([[2, 2, 2, 2]])
    })
})
