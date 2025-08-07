import {maxCollectedFruits} from '../script'

describe('3363. Find the Maximum Number of Fruits Collected', (): void => {
    it('Many', (): void => {
        expect(maxCollectedFruits([[1, 2, 3, 4], [5, 6, 8, 7], [9, 10, 11, 12], [13, 14, 15, 16]]))
            .toBe(100)
    })

    it('A few', (): void => {
        expect(maxCollectedFruits([[1, 1], [1, 1]]))
            .toBe(4)
    })
})
