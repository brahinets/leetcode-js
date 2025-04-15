import {goodTriplets} from '../script'

describe('2179. Count Good Triplets in an Array', (): void => {
    it('The only good triplet', (): void => {
        expect(goodTriplets([2, 0, 1, 3], [0, 1, 2, 3]))
            .toBe(1)
    })

    it('Multiple good triplets', (): void => {
        expect(goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3]))
            .toBe(4)
    })
})
