import {smallestSubarrays} from '../script'

describe('2411. Smallest Subarrays With Maximum Bitwise OR', (): void => {
    it('One', (): void => {
        expect(smallestSubarrays([1, 0, 2, 1, 3]))
            .toEqual([3, 3, 2, 2, 1])
    })

    it('Two', (): void => {
        expect(smallestSubarrays([1, 2]))
            .toEqual([2, 1])
    })
})
