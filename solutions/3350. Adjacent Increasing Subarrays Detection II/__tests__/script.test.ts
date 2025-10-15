import {maxIncreasingSubarrays} from '../script'

describe('3350. Adjacent Increasing Subarrays Detection II', (): void => {
    it('One', (): void => {
        expect(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1]))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(maxIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7]))
            .toBe(2)
    })
})
