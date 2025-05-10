import {minSum} from '../script'

describe('2918. Minimum Equal Sum of Two Arrays After Replacing Zeros', (): void => {
    it('Possible to make the sum of both arrays equal', (): void => {
        expect(minSum([3, 2, 0, 1, 0], [6, 5, 0]))
            .toBe(12)
    })

    it('It is impossible to make the sum of both arrays equal', (): void => {
        expect(minSum([2, 0, 2, 0], [1, 4]))
            .toBe(-1)
    })
})
