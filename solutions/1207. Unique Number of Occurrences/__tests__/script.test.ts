import {uniqueOccurrences} from '../script'

describe('1207. Unique Number of Occurrences', (): void => {

    it('Unique', (): void => {
        expect(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
            .toBe(true)
    })

    it('Unique as well', (): void => {
        expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
            .toBe(true)
    })

    it('Non Unique', (): void => {
        expect(uniqueOccurrences([1, 2]))
            .toBe(false)
    })
})
