import {combinationSum2} from '../script'

describe('40. Combination Sum II', (): void => {

    it('Different combinations', (): void => {
        expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
            .toEqual([
                [1, 1, 6],
                [1, 2, 5],
                [1, 7],
                [2, 6]
            ])
    })

    it('Include itself', (): void => {
        expect(combinationSum2([2, 5, 2, 1, 2], 5))
            .toEqual([
                [1, 2, 2],
                [5]
            ])
    })
})
