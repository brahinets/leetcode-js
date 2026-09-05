import {firstStableIndex} from '../script'

describe('3904. Smallest Stable Index II', (): void => {
    it('stable index found after unstable prefix', (): void => {
        expect(firstStableIndex([5, 0, 1, 4], 3))
        .toEqual(3)
    })

    it('no index satisfies the threshold', (): void => {
        expect(firstStableIndex([3, 2, 1], 1))
        .toEqual(-1)
    })

    it('single element array', (): void => {
        expect(firstStableIndex([0], 0))
        .toEqual(0)
    })

    it('first index is already stable', (): void => {
        expect(firstStableIndex([1, 5, 5, 5], 4))
        .toEqual(0)
    })

    it('all elements equal', (): void => {
        expect(firstStableIndex([7, 7, 7, 7], 0))
        .toEqual(0)
    })

    it('large array within constraint bounds', (): void => {
        const size: number = 100000
        const nums: number[] = new Array<number>(size).fill(1000000000)

        expect(firstStableIndex(nums, 0))
        .toEqual(0)
    })
})
