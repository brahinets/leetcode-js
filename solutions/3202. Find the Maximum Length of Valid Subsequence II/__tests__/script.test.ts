import {maximumLength} from '../script'

describe('3202. Find the Maximum Length of Valid Subsequence II', (): void => {
    it('One', (): void => {
        expect(maximumLength([1, 2, 3, 4, 5], 2))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(maximumLength([1, 2, 3, 4, 5], 3))
            .toBe(4)
    })
})
