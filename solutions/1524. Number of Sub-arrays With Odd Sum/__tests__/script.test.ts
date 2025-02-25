import {numOfSubarrays} from '../script'

describe('1524. Number of Sub-arrays With Odd Sum', (): void => {
    it('One', (): void => {
        expect(numOfSubarrays([1, 3, 5]))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(numOfSubarrays([2, 4, 6]))
            .toBe(0)
    })

    it('Three', (): void => {
        expect(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]))
            .toBe(16)
    })
})
