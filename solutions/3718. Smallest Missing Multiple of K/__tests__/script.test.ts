import { missingMultiple } from '../script'

describe('3718. Smallest Missing Multiple of K', (): void => {
    it('some smaller multiples are present before the missing one', (): void => {
        expect(missingMultiple([8, 2, 3, 4, 6], 2)).toBe(10)
    })

    it('the smallest multiple itself is already missing', (): void => {
        expect(missingMultiple([1, 4, 7, 10, 15], 5)).toBe(5)
    })

    it('minimum array length with k of one', (): void => {
        expect(missingMultiple([1], 1)).toBe(2)
    })

    it('duplicate values in the array do not affect the result', (): void => {
        expect(missingMultiple([3, 3, 3, 6, 6, 9], 3)).toBe(12)
    })

    it('every multiple up to the maximum constraint value is present', (): void => {
        const nums: number[] = Array.from(
            { length: 100 },
            (_: unknown, index: number): number => index + 1
        )

        expect(missingMultiple(nums, 1)).toBe(101)
    })
})
