import { uniformArray } from '../script'

describe('3876. Construct Uniform Parity Array II', (): void => {
    it('mixing itself and a difference achieves an all-odd array', (): void => {
        expect(uniformArray([1, 4, 7])).toBe(
            true
        )
    })

    it('two elements with different parity cannot be unified', (): void => {
        expect(uniformArray([2, 3])).toBe(
            false
        )
    })

    it('array is already uniformly even', (): void => {
        expect(uniformArray([4, 6])).toBe(
            true
        )
    })

    it('single element trivially satisfies either parity', (): void => {
        expect(uniformArray([5])).toBe(
            true
        )
    })

    it('smallest element has no smaller counterpart to flip its parity', (): void => {
        expect(uniformArray([2, 3, 4])).toBe(
            false
        )
    })

    it('unsorted input still resolves to a feasible odd array', (): void => {
        expect(uniformArray([7, 1, 4])).toBe(
            true
        )
    })

    it('large adjacent values satisfy the odd parity through their difference', (): void => {
        expect(uniformArray([1000000000, 999999999])).toBe(
            true
        )
    })
})
