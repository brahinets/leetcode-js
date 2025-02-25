import {checkSubarraySum} from '../script'

describe('523. Continuous Subarray Sum', (): void => {
    
    it('Sub-arrays are good', (): void => {
        expect(checkSubarraySum([23, 2, 4, 6, 7], 6))
            .toBe(true)
    })

    it('Full array is good', (): void => {
        expect(checkSubarraySum([23, 2, 6, 4, 7], 6))
            .toBe(true)
    })

    it('Full array is good', (): void => {
        expect(checkSubarraySum([23, 2, 6, 4, 7], 13))
            .toBe(false)
    })
})
