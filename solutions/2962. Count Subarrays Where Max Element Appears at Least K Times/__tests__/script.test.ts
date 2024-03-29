import {countSubarrays} from '../script'

describe('2962. Count Subarrays Where Max Element Appears at Least K Times', (): void => {

    it('No such sub-arrays', (): void => {
        expect(countSubarrays([1, 4, 2, 1], 3))
            .toBe(0)
    })

    it('Multiple sub-arrays', (): void => {
        expect(countSubarrays([1, 3, 2, 3, 3], 2))
            .toBe(6)
    })
})
