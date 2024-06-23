import {longestSubarray} from '../script'

describe('1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', (): void => {

    it('Multiple possible sub-arrays', (): void => {
        expect(longestSubarray([8, 2, 4, 7], 4))
            .toBe(2)
    })

    it('One sub-array', (): void => {
        expect(longestSubarray([10, 1, 2, 4, 7, 2], 5))
            .toBe(4)
    })

    it('All should be equal', (): void => {
        expect(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0))
            .toBe(3)
    })
})

