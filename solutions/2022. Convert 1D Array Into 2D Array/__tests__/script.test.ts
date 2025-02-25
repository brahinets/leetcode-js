import {construct2DArray} from '../script'

describe('2022. Convert 1D Array Into 2D Array', (): void => {

    it('1D to 1D', (): void => {
        expect(construct2DArray([1, 2, 3], 1, 3))
            .toEqual([[1, 2, 3]])
    })

    it('1D to 2D', (): void => {
        expect(construct2DArray([1, 2, 3, 4], 2, 2))
            .toEqual([[1, 2], [3, 4]])
    })

    it('It is impossible to fit elements', (): void => {
        expect(construct2DArray([1, 2], 1, 1))
            .toEqual([])
    })
})
