import {minOperations} from '../script'

describe('1769. Minimum Number of Operations to Move All Balls to Each Box', (): void => {
    it('One', (): void => {
        expect(minOperations("110"))
            .toEqual([1, 1, 3])
    })

    it('Two', (): void => {
        expect(minOperations("001011"))
            .toEqual([11, 8, 5, 4, 3, 4])
    })
})
