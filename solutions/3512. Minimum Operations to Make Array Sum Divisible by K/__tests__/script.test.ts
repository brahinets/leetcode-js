import {minOperations} from '../script'

describe('3512. Minimum Operations to Make Array Sum Divisible by K', (): void => {
    it('No needed', (): void => {
        expect(minOperations([4, 1, 3], 4))
            .toBe(0)
    })

    it('All operations on one number', (): void => {
        expect(minOperations([3, 9, 7], 5))
            .toBe(4)
    })

    it('Operations on different numbers', (): void => {
        expect(minOperations([3, 2], 6))
            .toBe(5)
    })
})
