import {maxFrequency} from '../script'

describe('3347. Maximum Frequency of an Element After Performing Operations II', (): void => {
    it('One', (): void => {
        expect(maxFrequency([1, 4, 5], 1, 2))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(maxFrequency([5, 11, 20, 20], 5, 1))
            .toBe(2)
    })
})
