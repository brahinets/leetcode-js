import {findLHS} from '../script'

describe('594. Longest Harmonious Subsequence', (): void => {
    it('One longest harmonious subsequence', (): void => {
        expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
            .toBe(5)
    })

    it('Multiple longest harmonious subsequences', (): void => {
        expect(findLHS([1, 2, 3, 4]))
            .toBe(2)
    })

    it('No harmonic subsequence exists', (): void => {
        expect(findLHS([1, 1, 1, 1]))
            .toBe(0)
    })
})
