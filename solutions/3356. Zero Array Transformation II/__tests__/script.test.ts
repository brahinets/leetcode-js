import {minZeroArray} from '../script'

describe('3356. Zero Array Transformation II', (): void => {
    it('Use some', (): void => {
        expect(minZeroArray([2, 0, 2], [[0, 2, 1], [0, 2, 1], [1, 1, 3]]))
            .toBe(2)
    })

    it('Use all', (): void => {
        expect(minZeroArray([2, 0, 2], [[0, 2, 1], [0, 2, 1]]))
            .toBe(2)
    })

    it('Impossible', (): void => {
        expect(minZeroArray([4, 3, 2, 1], [[1, 3, 2], [0, 2, 1]]))
            .toBe(-1)
    })
})
