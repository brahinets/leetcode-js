import {subarraySum} from '../script'

describe('560. Subarray Sum Equals K', (): void => {

    it('Several sub-arrays', (): void => {
        expect(subarraySum([1, 1, 1], 2))
            .toBe(2)
    })

    it('Sub-arrays with one element', (): void => {
        expect(subarraySum([1, 2, 3], 3))
            .toBe(2)
    })
})

