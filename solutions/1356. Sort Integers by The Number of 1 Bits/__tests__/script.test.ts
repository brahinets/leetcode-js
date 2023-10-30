import {sortByBits} from '../script'

describe('1356. Sort Integers by The Number of 1 Bits', (): void => {

    it('Different first bit', (): void => {
        expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))
            .toEqual([0, 1, 2, 4, 8, 3, 5, 6, 7])
    })

    it('All powers of two. Same first bit', (): void => {
        expect(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]))
            .toEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024])
    })
})
