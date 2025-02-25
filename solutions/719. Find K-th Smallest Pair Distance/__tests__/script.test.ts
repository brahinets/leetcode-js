import {smallestDistancePair} from '../script'

describe('719. Find K-th Smallest Pair Distance', (): void => {
    it('The first pair with the smallest distance', (): void => {
        expect(smallestDistancePair([1, 3, 1], 1))
            .toBe(0)
    })

    it('Second pair with the smallest distance', (): void => {
        expect(smallestDistancePair([1, 1, 1], 2))
            .toBe(0)
    })

    it('Late pair has the smallest distance', (): void => {
        expect(smallestDistancePair([1, 6, 1], 3))
            .toBe(5)
    })
})
