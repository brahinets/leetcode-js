import {numSubarrayProductLessThanK} from '../script'

describe('713. Subarray Product Less Than K', (): void => {

    it('No sub-arrays', (): void => {
        expect(numSubarrayProductLessThanK([1, 2, 3], 0))
            .toBe(0)
    })

    it('One sub-array', (): void => {
        expect(numSubarrayProductLessThanK([2, 3], 3))
            .toBe(1)
    })

    it('Multiple sub-arrays', (): void => {
        expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100))
            .toBe(8)
    })
})
