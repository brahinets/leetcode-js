import {countCompleteSubarrays} from '../script'

describe('2799. Count Complete Subarrays in an Array', (): void => {
    it('Few', (): void => {
        expect(countCompleteSubarrays([1, 3, 1, 2, 2]))
            .toBe(4)
    })

    it('Many', (): void => {
        expect(countCompleteSubarrays([5, 5, 5, 5]))
            .toBe(10)
    })
})
