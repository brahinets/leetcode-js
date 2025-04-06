import {largestDivisibleSubset} from '../script'

describe('368. Largest Divisible Subset', (): void => {
    it('Subset', (): void => {
        expect(largestDivisibleSubset([1, 2, 3]))
            .toEqual([1, 2])
    })

    it('Full set', (): void => {
        expect(largestDivisibleSubset([1, 2, 4, 8]))
            .toEqual([1, 2, 4, 8])
    })
})
