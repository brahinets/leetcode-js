import {maxSumOfThreeSubarrays} from '../script'

describe('689. Maximum Sum of 3 Non-Overlapping Subarrays', (): void => {
    it('One', (): void => {
        expect(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2))
            .toEqual([0, 3, 5])
    })

    it('Two', (): void => {
        expect(maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2))
            .toEqual([0, 2, 4])
    })
})
