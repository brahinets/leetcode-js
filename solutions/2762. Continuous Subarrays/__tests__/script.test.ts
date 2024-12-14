import {continuousSubarrays} from '../script'

describe('2762. Continuous Subarrays', (): void => {
    it('One', (): void => {
        expect(continuousSubarrays([5, 4, 2, 4]))
            .toBe(8)
    })

    it('Two', (): void => {
        expect(continuousSubarrays([1, 2, 3]))
            .toBe(6)
    })
})
