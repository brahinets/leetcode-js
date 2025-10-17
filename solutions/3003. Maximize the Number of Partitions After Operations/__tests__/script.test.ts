import {maxPartitionsAfterOperations} from '../script'

describe('3003. Maximize the Number of Partitions After Operations', (): void => {
    it('One', (): void => {
        expect(maxPartitionsAfterOperations("accca", 2))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(maxPartitionsAfterOperations("aabaab", 3))
            .toBe(1)
    })

    it('Three', (): void => {
        expect(maxPartitionsAfterOperations("xxyz", 1))
            .toBe(4)
    })
})
