import { maximumWeight } from '../script'

describe('3414. Maximum Score of Non-overlapping Intervals', (): void => {
    it('heavy interval combined with a later one beats many small ones', (): void => {
        const intervals: number[][] = [[1, 3, 2], [4, 5, 2], [1, 5, 5], [6, 9, 3], [6, 7, 1], [8, 9, 1]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([2, 3])
    })

    it('four intervals chosen and indices reported in ascending order', (): void => {
        const intervals: number[][] = [[5, 8, 1], [6, 7, 7], [4, 7, 3], [9, 10, 6], [7, 8, 2], [11, 14, 3], [3, 5, 5]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([1, 3, 5, 6])
    })

    it('single interval', (): void => {
        const intervals: number[][] = [[1, 1, 1]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0])
    })

    it('intervals sharing a boundary point overlap and tie resolves to smallest index', (): void => {
        const intervals: number[][] = [[1, 2, 5], [2, 3, 5]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0])
    })

    it('more than four disjoint intervals keep only the four heaviest', (): void => {
        const intervals: number[][] = [[1, 1, 1], [3, 3, 2], [5, 5, 3], [7, 7, 4], [9, 9, 5]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([1, 2, 3, 4])
    })

    it('equal scores prefer lexicographically smaller indices', (): void => {
        const intervals: number[][] = [[1, 1, 3], [3, 3, 3], [1, 3, 6]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0, 1])
    })

    it('input order differs from chronological order', (): void => {
        const intervals: number[][] = [[10, 11, 1], [1, 2, 1]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0, 1])
    })

    it('total score exceeding thirty two bit integer range', (): void => {
        const intervals: number[][] = [
            [1, 1, 1000000000],
            [3, 3, 1000000000],
            [5, 5, 1000000000],
            [7, 7, 1000000000]
        ]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0, 1, 2, 3])
    })

    it('interval spanning the whole coordinate range', (): void => {
        const intervals: number[][] = [[1, 1000000000, 1000000000]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0])
    })

    it('fewer intervals chosen when a single interval outweighs all disjoint ones', (): void => {
        const intervals: number[][] = [[1, 10, 100], [1, 2, 1], [4, 5, 1], [7, 8, 1]]

        const result: number[] = maximumWeight(intervals)

        expect(result)
            .toEqual([0])
    })
})
