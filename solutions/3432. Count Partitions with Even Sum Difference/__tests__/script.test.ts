import {countPartitions} from '../script'

describe('3432. Count Partitions with Even Sum Difference', (): void => {
    it('Some partitions result in an even sum difference', (): void => {
        expect(countPartitions([10, 10, 3, 7, 6]))
            .toBe(4)
    })

    it('No partitions result in an even sum difference', (): void => {
        expect(countPartitions([1, 2, 2]))
            .toBe(0)
    })

    it('All partitions result in an even sum difference', (): void => {
        expect(countPartitions([2, 4, 6, 8]))
            .toBe(3)
    })
})
