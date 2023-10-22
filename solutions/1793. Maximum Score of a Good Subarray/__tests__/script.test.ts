import {maximumScore} from '../script'

describe('1793. Maximum Score of a Good Subarray', (): void => {

    it('Entire array', (): void => {
        expect(maximumScore([1, 4, 3, 7, 4, 5], 3))
            .toBe(15)
    })

    it('First half of array', (): void => {
        expect(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0))
            .toBe(20)
    })

    it('Middle of array', (): void => {
        expect(maximumScore([2, 4, 7, 7, 12, 5, 5, 5, 1], 3))
            .toBe(30)
    })
})
