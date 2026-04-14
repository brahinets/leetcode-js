import { longestBalancedSubarray } from '../script'

describe('3719. Longest Balanced Subarray I', (): void => {

    it('Full array with two distinct evens and two distinct odds', (): void => {
        expect(longestBalancedSubarray([2, 5, 4, 3]))
            .toBe(4)
    })

    it('Full array with duplicates', (): void => {
        expect(longestBalancedSubarray([3, 2, 2, 5, 4]))
            .toBe(5)
    })

    it('Subarray with one distinct even and one distinct odd', (): void => {
        expect(longestBalancedSubarray([1, 2, 3, 2]))
            .toBe(3)
    })

    it('zero length for single element', (): void => {
        expect(longestBalancedSubarray([1]))
            .toBe(0)
    })

    it('zero length when all elements are even', (): void => {
        expect(longestBalancedSubarray([2, 4, 6, 8]))
            .toBe(0)
    })

    it('zero length when all elements are odd', (): void => {
        expect(longestBalancedSubarray([1, 3, 5, 7]))
            .toBe(0)
    })

    it('Alternating even and odd with two distinct each', (): void => {
        expect(longestBalancedSubarray([1, 2, 3, 4]))
            .toBe(4)
    })
})
