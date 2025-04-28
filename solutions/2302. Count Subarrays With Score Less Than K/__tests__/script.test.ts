import {countSubarrays} from '../script'

describe('2302. Count Subarrays With Score Less Than K', (): void => {
    it('Some subarray', (): void => {
        expect(countSubarrays([2, 1, 4, 3, 5], 10))
            .toBe(6)
    })

    it('Every subarray', (): void => {
        expect(countSubarrays([1, 1, 1], 5))
            .toBe(5)
    })
})
