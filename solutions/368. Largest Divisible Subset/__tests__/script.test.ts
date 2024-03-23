import {largestDivisibleSubset} from '../script'

describe('368. Largest Divisible Subset', (): void => {
    it('One', (): void => {
        expect(largestDivisibleSubset( [1,2,3]))
            .toEqual([1,2])
    })

    it('Two', (): void => {
        expect(largestDivisibleSubset([1,2,4,8]))
            .toEqual([1, 2, 4, 8])
    })
})
