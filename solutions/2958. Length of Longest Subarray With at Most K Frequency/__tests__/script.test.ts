import {maxSubarrayLength} from '../script'

describe('2958. Length of Longest Subarray With at Most K Frequency', (): void => {

    it('Different numbers sub-arrays', (): void => {
        expect(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2))
            .toBe(6)
    })

    it('Limited numbers sub-arrays', (): void => {
        expect(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1))
            .toBe(2)
    })

    it('Single number sub-arrays', (): void => {
        expect(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4))
            .toBe(4)
    })

    it('Single number sub-arrays #2', (): void => {
        expect(maxSubarrayLength([2, 2, 3], 1))
            .toBe(2)
    })

    it('Single number sub-arrays #3', (): void => {
        expect(maxSubarrayLength([3, 1, 1], 1))
            .toBe(2)
    })

    it('No sub-arrays', (): void => {
        expect(maxSubarrayLength([1], 1))
            .toBe(1)
    })
})
