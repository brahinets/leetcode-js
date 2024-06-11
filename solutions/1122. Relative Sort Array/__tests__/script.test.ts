import {relativeSortArray} from '../script'

describe('1122. Relative Sort Array', (): void => {

    it('Has unique, put hem in the end', (): void => {
        expect(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
            .toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
    })

    it('No unique', (): void => {
        expect(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]))
            .toEqual([22, 28, 8, 6, 17, 44])
    })

    it('No unique №2', (): void => {
        expect(relativeSortArray([1, 2, 3, 4, 5, 0], [4, 1, 3]))
            .toEqual([4, 1, 3, 0, 2, 5])
    })
})
