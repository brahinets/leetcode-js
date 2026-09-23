import {minOperations} from '../script'

describe('1658. Minimum Operations to Reduce X to Zero', (): void => {
    it('removing from both ends reaches zero', (): void => {
        expect(minOperations([1, 1, 4, 2, 3], 5))
            .toBe(2)
    })

    it('no combination of removals reaches zero', (): void => {
        expect(minOperations([5, 6, 7, 8, 9], 4))
            .toBe(-1)
    })

    it('requires removing from both ends across multiple elements', (): void => {
        expect(minOperations([3, 2, 20, 1, 1, 3], 10))
            .toBe(5)
    })

    it('single element equal to target', (): void => {
        expect(minOperations([1], 1))
            .toBe(1)
    })

    it('entire array sums exactly to target', (): void => {
        expect(minOperations([1, 1, 1], 3))
            .toBe(3)
    })

    it('target is zero requires no operations', (): void => {
        expect(minOperations([1, 2, 3], 0))
            .toBe(0)
    })

    it('target smaller than every prefix and suffix combination', (): void => {
        expect(minOperations([1, 1], 3))
            .toBe(-1)
    })
})
