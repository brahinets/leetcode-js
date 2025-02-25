import {minimumSubarrayLength} from '../script'

describe('3097. Shortest Subarray With OR at Least K II', (): void => {
    it('One', (): void => {
        expect(minimumSubarrayLength([1, 2, 3], 2))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(minimumSubarrayLength([2, 1, 8], 10))
            .toBe(3)
    })

    it('Three', (): void => {
        expect(minimumSubarrayLength([1, 2], 0))
            .toBe(1)
    })
})
