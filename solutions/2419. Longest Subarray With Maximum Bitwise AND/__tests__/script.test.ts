import {longestSubarray} from '../script'

describe('2419. Longest Subarray With Maximum Bitwise AND', (): void => {

    it('Sub-array', (): void => {
        expect(longestSubarray([1, 2, 3, 3, 2, 2]))
            .toBe(2)
    })

    it('Single element', (): void => {
        expect(longestSubarray([1, 2, 3, 4]))
            .toBe(1)
    })
})
