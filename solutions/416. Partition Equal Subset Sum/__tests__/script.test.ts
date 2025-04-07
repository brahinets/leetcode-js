import {canPartition} from '../script'

describe('416. Partition Equal Subset Sum', (): void => {
    it('Can be partitioned', (): void => {
        expect(canPartition([1, 5, 11, 5]))
            .toBe(true)
    })

    it('Cannot be partitioned', (): void => {
        expect(canPartition([1, 2, 3, 5]))
            .toBe(false)
    })
})
