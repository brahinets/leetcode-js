import {kthSmallestPrimeFraction} from '../script'

describe('786. K-th Smallest Prime Fraction', (): void => {

    it('Floating fraction', (): void => {
        expect(kthSmallestPrimeFraction([1, 2, 3, 5], 3))
            .toEqual([2, 5])
    })

    it('Integer fraction', (): void => {
        expect(kthSmallestPrimeFraction([1, 7], 1))
            .toEqual([1, 7])
    })
})
