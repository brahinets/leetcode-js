import {maxFrequencyElements} from '../script'

describe('3005. Count Elements With Maximum Frequency', (): void => {
    it('One high frequency', (): void => {
        expect(maxFrequencyElements([1, 2, 3, 1, 4]))
            .toBe(2)
    })

    it('Multiple high frequency', (): void => {
        expect(maxFrequencyElements([1, 2, 2, 3, 1, 4]))
            .toBe(4)
    })

    it('All high frequency', (): void => {
        expect(maxFrequencyElements([1, 2, 3, 4, 5]))
            .toBe(5)
    })
})
