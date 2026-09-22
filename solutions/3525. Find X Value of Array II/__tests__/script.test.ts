import { resultArray } from '../script'

describe('3525. Find X Value of Array II', (): void => {
    it('sequential updates and prefix removals across queries', (): void => {
        const nums: number[] = [1, 2, 3, 4, 5]
        const k: number = 3
        const queries: number[][] = [
            [2, 2, 0, 2],
            [3, 3, 3, 0],
            [0, 1, 0, 1]
        ]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([2, 2, 2])
    })

    it('powers of two where one query has no matching suffix', (): void => {
        const nums: number[] = [1, 2, 4, 8, 16, 32]
        const k: number = 4
        const queries: number[][] = [
            [0, 2, 0, 2],
            [0, 2, 0, 1]
        ]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([1, 0])
    })

    it('duplicate values collapsing to the same residue', (): void => {
        const nums: number[] = [1, 1, 2, 1, 1]
        const k: number = 2
        const queries: number[][] = [[2, 1, 0, 1]]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([5])
    })

    it('single element array updated in place', (): void => {
        const nums: number[] = [7]
        const k: number = 5
        const queries: number[][] = [[0, 3, 0, 3]]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([1])
    })

    it('prefix removal that leaves only the last element', (): void => {
        const nums: number[] = [1, 2, 3, 4, 5]
        const k: number = 3
        const queries: number[][] = [[0, 1, 4, 2]]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([1])
    })

    it('k equal to one collapses every suffix into residue zero', (): void => {
        const nums: number[] = [3, 5, 9]
        const k: number = 1
        const queries: number[][] = [[1, 4, 0, 0]]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([3])
    })

    it('large values that require modular reduction before multiplication', (): void => {
        const nums: number[] = [1000000000, 999999999, 5]
        const k: number = 5
        const queries: number[][] = [[2, 4, 0, 0]]

        const result: number[] = resultArray(nums, k, queries)

        expect(result)
            .toEqual([3])
    })
})
