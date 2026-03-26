import { canPartitionGrid } from '../script'

describe('3548. Equal Sum Grid Partition II', (): void => {
    it('returns true when horizontal cut produces equal sums without discounting', (): void => {
        expect(canPartitionGrid([
            [1, 4],
            [2, 3],
        ]))
            .toBe(true)
    })

    it('returns true when vertical cut with discounted corner cell balances sums', (): void => {
        expect(canPartitionGrid([
            [1, 2],
            [3, 4],
        ]))
            .toBe(true)
    })

    it('returns false when discounting would disconnect the section', (): void => {
        expect(canPartitionGrid([
            [1, 2, 4],
            [2, 3, 5],
        ]))
            .toBe(false)
    })

    it('returns true when discounting an interior cell from a multi-row multi-column section', (): void => {
        expect(canPartitionGrid([
            [1, 1, 1],
            [1, 4, 1],
            [1, 1, 1],
            [2, 3, 3],
        ]))
            .toBe(true)
    })

    it('returns false when required discount value does not exist in any removable position', (): void => {
        expect(canPartitionGrid([
            [1, 6],
            [3, 5],
        ]))
            .toBe(false)
    })

    it('returns true for single-column grid with equal-sum horizontal cut', (): void => {
        expect(canPartitionGrid([[5], [5]]))
            .toBe(true)
    })

    it('returns true for single-column grid when endpoint cell discount balances sums', (): void => {
        expect(canPartitionGrid([[3], [5], [3]]))
            .toBe(true)
    })

    it('returns true for single-row grid with equal-sum vertical cut', (): void => {
        expect(canPartitionGrid([[3, 3]]))
            .toBe(true)
    })

    it('returns true for single-row grid when endpoint cell discount balances sums', (): void => {
        expect(canPartitionGrid([[5, 2, 2, 3]]))
            .toBe(true)
    })

    it('returns false when single-column section middle cell would be required but is not removable', (): void => {
        expect(canPartitionGrid([[3], [5], [2]]))
            .toBe(false)
    })
})
