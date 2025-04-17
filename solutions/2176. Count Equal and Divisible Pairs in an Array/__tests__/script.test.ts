import {countPairs} from '../script'

describe('2176. Count Equal and Divisible Pairs in an Array', (): void => {
    it('Many', (): void => {
        expect(countPairs([3, 1, 2, 2, 2, 1, 3], 2))
            .toBe(4)
    })

    it('No', (): void => {
        expect(countPairs([1, 2, 3, 4], 1))
            .toBe(0)
    })
})
