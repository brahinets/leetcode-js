import {resultArray} from '../script'

describe('3074. Distribute Elements Into Two Arrays I', (): void => {
    it('third element goes to the first array when it is greater', (): void => {
        expect(resultArray([2, 1, 3]))
            .toEqual([2, 3, 1])
    })

    it('elements alternate between arrays based on last element comparison', (): void => {
        expect(resultArray([5, 4, 3, 8]))
            .toEqual([5, 3, 4, 8])
    })

    it('minimum length input of three elements', (): void => {
        expect(resultArray([1, 3, 2]))
            .toEqual([1, 3, 2])
    })

    it('every element appended to the first array', (): void => {
        expect(resultArray([10, 1, 9, 8, 7]))
            .toEqual([10, 9, 8, 7, 1])
    })
})
