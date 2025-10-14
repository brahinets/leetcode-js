import {hasIncreasingSubarrays} from '../script'

describe('3349. Adjacent Increasing Subarrays Detection I', (): void => {
    it('Yes', (): void => {
        expect(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3))
            .toBe(true)
    })

    it('No', (): void => {
        expect(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5))
            .toBe(false)
    })
})
