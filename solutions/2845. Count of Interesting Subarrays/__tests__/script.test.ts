import {countInterestingSubarrays} from '../script'

describe('2845. Count of Interesting Subarrays', (): void => {
    it('One', (): void => {
        expect(countInterestingSubarrays([3, 2, 4], 2, 1))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(countInterestingSubarrays([3, 1, 9, 6], 3, 0))
            .toBe(2)
    })

})
