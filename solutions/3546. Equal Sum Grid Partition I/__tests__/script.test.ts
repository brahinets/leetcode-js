import { canPartitionGrid } from '../script'

describe('3546. Equal Sum Grid Partition I', (): void => {
    it('true when horizontal cut produces equal sums', (): void => {
        expect(canPartitionGrid([
            [1, 4],
            [2, 3],
        ]))
            .toBe(true)
    })

    it('false when no cut produces equal sums', (): void => {
        expect(canPartitionGrid([
            [1, 3],
            [2, 4],
        ]))
            .toBe(false)
    })

    it('false when no vertical cut yields equal sums', (): void => {
        expect(canPartitionGrid([
            [1, 2],
            [3, 4],
        ]))
            .toBe(false)
    })

    it('true for single row with valid vertical cut', (): void => {
        expect(canPartitionGrid([[3, 3]]))
            .toBe(true)
    })

    it('true for single column with valid horizontal cut', (): void => {
        expect(canPartitionGrid([[5], [5]]))
            .toBe(true)
    })

    it('false when total sum is odd', (): void => {
        expect(canPartitionGrid([[1, 2]]))
            .toBe(false)
    })
})
