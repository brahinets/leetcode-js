import {longestMonotonicSubarray} from '../script'

describe('3105. Longest Strictly Increasing or Strictly Decreasing Subarray', (): void => {
    it('Two non-sequential decreasing sub arrays', (): void => {
        expect(longestMonotonicSubarray([1, 4, 3, 3, 2]))
            .toBe(2)
    })

    it('No such sub arrays', (): void => {
        expect(longestMonotonicSubarray([3, 3, 3, 3]))
            .toBe(1)
    })

    it('All sequential decreasing sub arrays', (): void => {
        expect(longestMonotonicSubarray([3, 2, 1]))
            .toBe(3)
    })
})
