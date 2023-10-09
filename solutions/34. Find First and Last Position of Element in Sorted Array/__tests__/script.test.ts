import {searchRange} from '../script'

describe('34. Find First and Last Position of Element in Sorted Array', (): void => {
    it('Not found in empty', (): void => {
        expect(searchRange([], 0))
            .toStrictEqual([-1, -1])
    })

    it('Not found in non empty', (): void => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6))
            .toStrictEqual([-1, -1])
    })

    it('Found one. End inclusive', (): void => {
        expect(searchRange([5, 7, 7, 8, 10], 8))
            .toStrictEqual([3, 3])
    })

    it('Found multiple. End inclusive', (): void => {
        expect(searchRange([2, 2], 2))
            .toStrictEqual([0, 1])
    })

    it('Found multiple. End inclusive', (): void => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8))
            .toStrictEqual([3, 4])
    })
})
