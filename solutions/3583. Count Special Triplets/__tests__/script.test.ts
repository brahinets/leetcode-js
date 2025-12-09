import {specialTriplets} from '../script'

describe('3583. Count Special Triplets', (): void => {
    it('The only triplet. Full set', (): void => {
        expect(specialTriplets([6, 3, 6]))
            .toBe(1)
    })

    it('The only triplet. Subset', (): void => {
        expect(specialTriplets([0, 1, 0, 0]))
            .toBe(1)
    })

    it('Multiple triplets', (): void => {
        expect(specialTriplets([8, 4, 2, 8, 4]))
            .toBe(2)
    })

})
