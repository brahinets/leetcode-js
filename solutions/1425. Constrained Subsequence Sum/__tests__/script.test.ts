import {constrainedSubsetSum} from '../script'

describe('1425. Constrained Subsequence Sum', (): void => {

    it('The largest number', (): void => {
        expect(constrainedSubsetSum([-1, -2, -3], 1))
            .toBe(-1)
    })

    it('Subsequence', (): void => {
        expect(constrainedSubsetSum([10, 2, -10, 5, 20], 2))
            .toBe(37)
    })

    it('Subsequence #2', (): void => {
        expect(constrainedSubsetSum([10, -2, -10, -5, 20], 2))
            .toBe(23)
    })
})
