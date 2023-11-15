import {maximumElementAfterDecrementingAndRearranging} from '../script'

describe('1846. Maximum Element After Decreasing and Rearranging', (): void => {

    it('Multiple ways to satisfy', (): void => {
        expect(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1]))
            .toBe(2)
    })

    it('One possible way to satisfy', (): void => {
        expect(maximumElementAfterDecrementingAndRearranging([100, 1, 1000]))
            .toBe(3)
    })

    it('Array already satisfies the conditions', (): void => {
        expect(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5]))
            .toBe(5)
    })
})
