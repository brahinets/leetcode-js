import {isZeroArray} from '../script'

describe('3355. Zero Array Transformation I', (): void => {
    it('Possible', (): void => {
        expect(isZeroArray([1, 0, 1], [[0, 2]]))
            .toBe(true)
    })

    it('Not possible', (): void => {
        expect(isZeroArray([4, 3, 2, 1], [[1, 3], [0, 2]]))
            .toBe(false)
    })
})
