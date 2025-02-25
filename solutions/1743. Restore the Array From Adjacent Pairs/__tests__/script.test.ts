import {restoreArray} from '../script'

describe('1743. Restore the Array From Adjacent Pairs', (): void => {
    it('Has all pairs', (): void => {
        expect(restoreArray([[2, 1], [3, 4], [3, 2]]))
            .toEqual([1, 2, 3, 4])
    })

    it('Can be negative', (): void => {
        expect(restoreArray([[4, -2], [1, 4], [-3, 1]]))
            .toEqual([-2, 4, 1, -3])
    })

    it('All', (): void => {
        expect(restoreArray([[100000, -100000]]))
            .toEqual([100000, -100000])
    })
})
