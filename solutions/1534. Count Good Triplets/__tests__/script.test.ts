import {countGoodTriplets} from '../script'

describe('1534. Count Good Triplets', (): void => {
    it('Multiple triplets satisfies all conditions.', (): void => {
        expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))
            .toBe(4)
    })

    it('No triplet satisfies all conditions.', (): void => {
        expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1))
            .toBe(0)
    })
})
