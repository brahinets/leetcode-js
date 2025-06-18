import {combinationSum} from '../script'

describe('39. Combination Sum', (): void => {
    it('One', (): void => {
        expect(combinationSum([2, 3, 6, 7], 7))
            .toEqual([[2, 2, 3], [7]])
    })

    it('Two', (): void => {
        expect(combinationSum([2, 3, 5], 8))
            .toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]])
    })

    it('No combinations', (): void => {
        expect(combinationSum([2], 1))
            .toEqual([])
    })
})
