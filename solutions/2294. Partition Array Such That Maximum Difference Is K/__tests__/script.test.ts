import {partitionArray} from '../script'

describe('2294. Partition Array Such That Maximum Difference Is K', (): void => {
    it('Two #1', (): void => {
        expect(partitionArray([3, 6, 1, 2, 5], 2))
            .toBe(2)
    })

    it('Two #2', (): void => {
        expect(partitionArray([1, 2, 3], 1))
            .toBe(2)
    })

    it('Three', (): void => {
        expect(partitionArray([2, 2, 4, 5], 0))
            .toBe(3)
    })
})
