import {countSubarrays} from '../script'

describe('2444. Count Subarrays With Fixed Bounds', (): void => {

    it('Many sub-arrays', (): void => {
        expect(countSubarrays([1, 1, 1, 1], 1, 1))
            .toBe(10)
    })

    it('Multiple sub-arrays', (): void => {
        expect(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))
            .toBe(2)
    })

    it('No sub-arrays', (): void => {
        expect(countSubarrays([2, 2, 1], 3, 6))
            .toBe(0)
    })
})
