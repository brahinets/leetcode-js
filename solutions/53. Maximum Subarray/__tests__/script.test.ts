import {maxSubArray} from '../script'

describe('53. Maximum Subarray', (): void => {
    it('Skip positives', (): void => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
            .toBe(6)
    })

    it('Full array', (): void => {
        expect(maxSubArray([1]))
            .toBe(1)
    })

    it('Skip negatives', (): void => {
        expect(maxSubArray([5, 4, -1, 7, 8]))
            .toBe(23)
    })
})
