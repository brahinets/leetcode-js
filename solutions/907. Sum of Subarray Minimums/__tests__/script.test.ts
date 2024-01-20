import {sumSubarrayMins} from '../script'

describe('907. Sum of Subarray Minimums', (): void => {

    it('One', (): void => {
        expect(sumSubarrayMins([3, 1, 2, 4]))
            .toBe(17)
    })

    it('Two', (): void => {
        expect(sumSubarrayMins([11, 81, 94, 43, 3]))
            .toBe(444)
    })
})
