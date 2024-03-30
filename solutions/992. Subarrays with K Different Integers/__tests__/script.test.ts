import {subarraysWithKDistinct} from '../script'

describe('992. Subarrays with K Different Integers', (): void => {

    it('Many sub-arrays', (): void => {
        expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))
            .toBe(7)
    })

    it('Multiple sub-arrays', (): void => {
        expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3))
            .toBe(3)
    })

    it('No sub-arrays', (): void => {
        expect(subarraysWithKDistinct([2, 2, 1], 3))
            .toBe(0)
    })
})
