import {divideArray} from '../script'

describe('2966. Divide Array Into Arrays With Max Difference', (): void => {

    it('Divided', (): void => {
        expect(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2))
            .toStrictEqual([[1, 1, 3], [3, 4, 5], [7, 8, 9]])
    })

    it('Impossible to divide due to elements value difference', (): void => {
        expect(divideArray([1, 3, 3, 2, 7, 3], 3))
            .toStrictEqual([])
    })

    it('Impossible to divide due to elements value difference as well', (): void => {
        expect(divideArray([15, 13, 12, 13, 12, 14, 12, 2, 3, 13, 12, 14, 14, 13, 5, 12, 12, 2, 13, 2, 2], 2))
            .toStrictEqual([])
    })

    it('Impossible to divide due to elements count not multiple to three', (): void => {
        expect(divideArray([1, 1, 1, 1, 1], 3))
            .toStrictEqual([])
    })
})
