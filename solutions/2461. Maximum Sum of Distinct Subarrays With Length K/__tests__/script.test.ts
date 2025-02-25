import {maximumSubarraySum} from '../script'

describe('2461. Maximum Sum of Distinct Subarrays With Length K', (): void => {
    it('Some subarrays meet the conditions', (): void => {
        expect(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))
            .toBe(15)
    })

    it('No subarrays meet the conditions', (): void => {
        expect(maximumSubarraySum([4, 4, 4], 3))
            .toBe(0)
    })
})
