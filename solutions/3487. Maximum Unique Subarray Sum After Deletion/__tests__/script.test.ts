import {maxSum} from '../script'

describe('3487. Maximum Unique Subarray Sum After Deletion', (): void => {
    it('Entire array without deleting any element', (): void => {
        expect(maxSum([1, 2, 3, 4, 5]))
            .toBe(15)
    })

    it('Delete some', (): void => {
        expect(maxSum([1, 1, 0, 1, 1]))
            .toBe(31)
    })

    it('Delete many', (): void => {
        expect(maxSum([1, 2, -1, -2, 1, 0, -1]))
            .toBe(3)
    })
})
