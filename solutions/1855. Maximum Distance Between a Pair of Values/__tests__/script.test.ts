import { maxDistance } from '../script'

describe('1855. Maximum Distance Between a Pair of Values', (): void => {

    it('example with distance of 2', (): void => {
        expect(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]))
            .toBe(2)
    })

    it('all equal values in both arrays', (): void => {
        expect(maxDistance([2, 2, 2], [10, 10, 1]))
            .toBe(1)
    })

    it('no valid pair exists', (): void => {
        expect(maxDistance([10, 10], [5, 5, 5]))
            .toBe(0)
    })

    it('single element arrays matching', (): void => {
        expect(maxDistance([1], [1]))
            .toBe(0)
    })

    it('maximum distance at last positions', (): void => {
        expect(maxDistance([5, 4, 3, 2, 1], [10, 9, 8, 7, 6]))
            .toBe(4)
    })

})
