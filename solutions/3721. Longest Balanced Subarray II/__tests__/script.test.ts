import { longestBalanced } from '../script'

describe('3721. Longest Balanced Subarray II', (): void => {

    it('Full array with two distinct evens and two distinct odds', (): void => {
        expect(longestBalanced([2, 5, 4, 3]))
            .toBe(4)
    })

    it('Full array with duplicates', (): void => {
        expect(longestBalanced([3, 2, 2, 5, 4]))
            .toBe(5)
    })

    it('Subarray with one distinct even and one distinct odd', (): void => {
        expect(longestBalanced([1, 2, 3, 2]))
            .toBe(3)
    })

    it('Single element returns zero', (): void => {
        expect(longestBalanced([1]))
            .toBe(0)
    })

    it('All even numbers returns zero', (): void => {
        expect(longestBalanced([2, 4, 6, 8]))
            .toBe(0)
    })

    it('All odd numbers returns zero', (): void => {
        expect(longestBalanced([1, 3, 5, 7]))
            .toBe(0)
    })

    it('Alternating even and odd with two distinct each', (): void => {
        expect(longestBalanced([1, 2, 3, 4]))
            .toBe(4)
    })

    it('Large array with multiple duplicates', (): void => {
        expect(longestBalanced([1, 2, 3, 4, 1, 2, 3, 4, 5, 6]))
            .toBe(10)
    })

    it('Balanced subarray at the end', (): void => {
        expect(longestBalanced([1, 1, 1, 2, 4, 3, 5]))
            .toBe(6)
    })

    it('Multiple balanced subarrays, pick longest', (): void => {
        expect(longestBalanced([2, 3, 4, 5, 6, 7, 8, 9]))
            .toBe(8)
    })

    it('Balanced subarray with many duplicates of same numbers', (): void => {
        expect(longestBalanced([2, 2, 2, 3, 3, 3]))
            .toBe(6)
    })

    it('Two elements with one even and one odd', (): void => {
        expect(longestBalanced([2, 3]))
            .toBe(2)
    })

    it('Complex case with multiple repeated values', (): void => {
        expect(longestBalanced([1, 2, 1, 4, 3, 4, 5, 6, 5, 6]))
            .toBe(10)
    })
})
