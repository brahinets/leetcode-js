import {maximumCandies} from '../script'

describe('2226. Maximum Candies Allocated to K Children', (): void => {
    it('Possible', (): void => {
        expect(maximumCandies([5, 8, 6], 3))
            .toBe(5)
    })

    it('Impossible', (): void => {
        expect(maximumCandies([2, 5], 11))
            .toBe(0)
    })

})
