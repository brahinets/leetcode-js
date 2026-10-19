import {targetIndices} from '../script'

describe('2089. Find Target Indices After Sorting Array', (): void => {

    it('target appears multiple times', (): void => {
        expect(targetIndices([1, 2, 5, 2, 3], 2))
            .toEqual([1, 2])
    })

    it('target appears once in the middle of sorted order', (): void => {
        expect(targetIndices([1, 2, 5, 2, 3], 3))
            .toEqual([3])
    })

    it('target is the largest value', (): void => {
        expect(targetIndices([1, 2, 5, 2, 3], 5))
            .toEqual([4])
    })

    it('target is not present in the array', (): void => {
        expect(targetIndices([1, 2, 5, 2, 3], 4))
            .toEqual([])
    })

    it('single element equal to target', (): void => {
        expect(targetIndices([7], 7))
            .toEqual([0])
    })

    it('single element different from target', (): void => {
        expect(targetIndices([7], 3))
            .toEqual([])
    })

    it('target is the smallest value and appears first in the array', (): void => {
        expect(targetIndices([1, 3, 1, 4], 1))
            .toEqual([0, 1])
    })

    it('every element equals target', (): void => {
        expect(targetIndices([4, 4, 4, 4], 4))
            .toEqual([0, 1, 2, 3])
    })

    it('target smaller than every element', (): void => {
        expect(targetIndices([5, 6, 7], 1))
            .toEqual([])
    })

    it('target larger than every element', (): void => {
        expect(targetIndices([5, 6, 7], 9))
            .toEqual([])
    })

    it('unsorted input with target at both ends of the value range', (): void => {
        expect(targetIndices([100, 1, 50, 1, 100], 100))
            .toEqual([3, 4])
    })

    it('maximum length input with target at the boundary value', (): void => {
        const nums: number[] = Array.from({length: 100}, (_: unknown, index: number): number => index === 0 ? 100 : 1)

        expect(targetIndices(nums, 100))
            .toEqual([99])
    })
})
