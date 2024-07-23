import {frequencySort} from '../script'

describe('1636. Sort Array by Increasing Frequency', (): void => {

    it('Different number of occurrences', (): void => {
        expect(frequencySort([1, 1, 2, 2, 2, 3]))
            .toEqual([3, 1, 1, 2, 2, 2])
    })

    it('Equal number of occurrence sort equal decreasing', (): void => {
        expect(frequencySort([2, 3, 1, 3, 2]))
            .toEqual([1, 3, 3, 2, 2])
    })

    it('Negative numbers', (): void => {
        expect(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))
            .toEqual([5, -1, 4, 4, -6, -6, 1, 1, 1])
    })
})
