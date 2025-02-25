import {canSortArray} from '../script'

describe('3011. Find if Array Can Be Sorted', (): void => {
    it('Can sort different radix', (): void => {
        expect(canSortArray([8, 4, 2, 30, 15]))
            .toBe(true)
    })

    it('The array is already sorted', (): void => {
        expect(canSortArray([1, 2, 3, 4, 5]))
            .toBe(true)
    })

    it('Cannot sort', (): void => {
        expect(canSortArray([3, 16, 8, 4, 2]))
            .toBe(false)
    })
})
