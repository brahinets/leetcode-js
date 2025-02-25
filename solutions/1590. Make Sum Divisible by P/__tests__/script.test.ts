import {minSubarray} from '../script'

describe('1590. Make Sum Divisible by P', (): void => {
    it('Remove only one', (): void => {
        expect(minSubarray([3, 1, 4, 2], 6))
            .toBe(1)
    })

    it('Remove multiple', (): void => {
        expect(minSubarray([6, 3, 5, 2], 9))
            .toBe(2)
    })

    it('Remove nothing', (): void => {
        expect(minSubarray([1, 2, 3], 3))
            .toBe(0)
    })

    it('No options', (): void => {
        expect(minSubarray([1, 2, 3], 9))
            .toBe(-1)
    })
})
