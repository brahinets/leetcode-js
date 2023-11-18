import {maxFrequency} from '../script'

describe('1838. Frequency of the Most Frequent Element', (): void => {
    it('Zero options', (): void => {
        expect(maxFrequency([3, 9, 6], 2))
            .toBe(1)
    })

    it('Single option', (): void => {
        expect(maxFrequency([1, 2, 4], 5))
            .toBe(3)
    })

    it('Multiple options', (): void => {
        expect(maxFrequency([1, 4, 8, 13], 5))
            .toBe(2)
    })
})
