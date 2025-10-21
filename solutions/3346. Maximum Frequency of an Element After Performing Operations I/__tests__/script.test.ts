import {maxFrequency} from '../script'

describe('3346. Maximum Frequency of an Element After Performing Operations I', (): void => {
    it('Very Complex', (): void => {
        expect(maxFrequency([2, 70, 73], 39, 2))
            .toBe(2)
    })

    it('No operations', (): void => {
        expect(maxFrequency([2, 49], 97, 0))
            .toBe(1)
    })

    it('Complex', (): void => {
        expect(maxFrequency([1, 4, 5], 1, 2))
            .toBe(2)
    })

    it('Simple', (): void => {
        expect(maxFrequency([5, 11, 20, 20], 5, 1))
            .toBe(2)
    })
})
