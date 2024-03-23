import {numSubarraysWithSum} from '../script'

describe('930. Binary Subarrays With Sum', (): void => {

    it('Neither of sub-array', (): void => {
        expect(numSubarraysWithSum([1, 0, 0, 0, 0], 2))
            .toBe(0)
    })

    it('Some of sub-array', (): void => {
        expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
            .toBe(4)
    })

    it('All of sub-array', (): void => {
        expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0))
            .toBe(15)
    })
})
