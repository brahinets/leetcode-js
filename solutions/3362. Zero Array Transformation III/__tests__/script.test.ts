import {maxRemoval} from '../script'

describe('3362. Zero Array Transformation III', (): void => {
    it('One element', (): void => {
        expect(maxRemoval([2, 0, 2], [[0, 2], [0, 2], [1, 1]]))
            .toBe(1)
    })

    it('Multiple elements', (): void => {
        expect(maxRemoval([1, 1, 1, 1], [[1, 3], [0, 2], [1, 3], [1, 2]]))
            .toBe(2)
    })

    it('Impossible to convert', (): void => {
        expect(maxRemoval([1, 2, 3, 4], [[0, 3]]))
            .toBe(-1)
    })
})
