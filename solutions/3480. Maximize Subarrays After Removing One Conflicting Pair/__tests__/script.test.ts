import {maxSubarrays} from '../script'

describe('3480. Maximize Subarrays After Removing One Conflicting Pair', (): void => {
    it('One left', (): void => {
        expect(maxSubarrays(4, [[2, 3], [1, 4]]))
            .toBe(9)
    })

    it('Multiple left', (): void => {
        expect(maxSubarrays(5, [[1, 2], [2, 5], [3, 5]]))
            .toBe(12)
    })
})
