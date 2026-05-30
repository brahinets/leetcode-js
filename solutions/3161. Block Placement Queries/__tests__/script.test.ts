import {getResults} from '../script'

describe('3161. Block Placement Queries', (): void => {
    it('block fits in gap before first obstacle', (): void => {
        expect(getResults([[1, 2], [2, 3, 3], [2, 3, 1], [2, 2, 2]]))
            .toEqual([false, true, true])
    })

    it('block fits between obstacles and shrinks with new obstacle', (): void => {
        expect(getResults([[1, 7], [2, 7, 6], [1, 2], [2, 7, 5], [2, 7, 6]]))
            .toEqual([true, true, false])
    })

    it('no obstacles block always fits', (): void => {
        expect(getResults([[2, 10, 5]]))
            .toEqual([true])
    })

    it('size exceeds available space at boundary', (): void => {
        expect(getResults([[1, 3], [2, 3, 4]]))
            .toEqual([false])
    })

    it('block exactly fits touching both obstacles', (): void => {
        expect(getResults([[1, 3], [1, 7], [2, 7, 4]]))
            .toEqual([true])
    })

    it('block fits in right gap but not left gap', (): void => {
        expect(getResults([[1, 4], [2, 10, 6], [2, 10, 7]]))
            .toEqual([true, false])
    })
})
