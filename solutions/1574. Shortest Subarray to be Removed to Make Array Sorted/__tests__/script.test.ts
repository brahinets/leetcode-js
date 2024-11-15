import {findLengthOfShortestSubarray} from '../script'

describe('1574. Shortest Subarray to be Removed to Make Array Sorted', (): void => {
    it('Subarray is decreasing', (): void => {
        expect(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5]))
            .toBe(3)
    })

    it('Single value decreasing', (): void => {
        expect(findLengthOfShortestSubarray([5, 4, 3, 2, 1]))
            .toBe(4)
    })

    it('The array is already non-decreasing', (): void => {
        expect(findLengthOfShortestSubarray([1, 2, 3]))
            .toBe(0)
    })
})
