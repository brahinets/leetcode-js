import {countTriplets} from '../script'

describe('1442. Count Triplets That Can Form Two Arrays of Equal XOR', (): void => {

    it('Some triplets', (): void => {
        expect(countTriplets([2, 3, 1, 6, 7]))
            .toBe(4)
    })

    it('All triplets', (): void => {
        expect(countTriplets([1, 1, 1, 1, 1]))
            .toBe(10)
    })
})
