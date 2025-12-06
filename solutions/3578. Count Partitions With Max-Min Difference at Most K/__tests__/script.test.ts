import {countPartitions} from '../script'

describe('3578. Count Partitions With Max-Min Difference at Most K', (): void => {
    it('Many', (): void => {
        expect(countPartitions([9, 4, 1, 3, 7], 4))
            .toBe(6)
    })

    it('Few', (): void => {
        expect(countPartitions([3, 3, 4], 0))
            .toBe(2)
    })
})
