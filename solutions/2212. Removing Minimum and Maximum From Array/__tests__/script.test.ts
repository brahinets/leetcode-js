import { minimumDeletions } from '../script'

describe('2212. Removing Minimum and Maximum From Array', (): void => {
    it('minimum and maximum are closer to opposite ends', (): void => {
        expect(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])).toBe(5)
    })

    it('minimum and maximum are adjacent near the front', (): void => {
        expect(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])).toBe(3)
    })

    it('single element array is both minimum and maximum', (): void => {
        expect(minimumDeletions([101])).toBe(1)
    })

    it('minimum and maximum are the two boundary elements', (): void => {
        expect(minimumDeletions([-5, 3, 2, 1, 9])).toBe(2)
    })

    it('maximum appears before minimum in the array', (): void => {
        expect(minimumDeletions([9, 3, 2, 1, -5])).toBe(2)
    })

    it('negative and positive values across the constraint range', (): void => {
        expect(minimumDeletions([-100000, 3, 2, 1, 100000])).toBe(2)
    })
})
