import {maxSumAfterPartitioning} from '../script'

describe('1043. Partition Array for Maximum Sum', (): void => {

    it('All arrays with max size except one tail ', (): void => {
        expect(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3))
            .toBe(84)
    })

    it('All arrays with different size', (): void => {
        expect(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4))
            .toBe(83)
    })

    it('The only way for partitions', (): void => {
        expect(maxSumAfterPartitioning([1], 1))
            .toBe(1)
    })
})
