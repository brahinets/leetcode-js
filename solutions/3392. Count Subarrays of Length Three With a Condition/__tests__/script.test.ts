import {countSubarrays} from '../script'

describe('3392. Count Subarrays of Length Three With a Condition', (): void => {
    it('No', (): void => {
        expect(countSubarrays([1, 1, 1]))
            .toBe(0)
    })

    it('The only', (): void => {
        expect(countSubarrays([1, 2, 1, 4, 1]))
            .toBe(1)
    })

    it('Multiple', (): void => {
        expect(countSubarrays([-1, 2, 2, 1, 4, 1]))
            .toBe(2)
    })
})
