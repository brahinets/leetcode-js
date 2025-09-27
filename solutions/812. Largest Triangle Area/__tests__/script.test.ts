import {largestTriangleArea} from '../script'

describe('812. Largest Triangle Area', (): void => {
    it('Multiple options', (): void => {
        expect(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]))
            .toBeCloseTo(2.00000, 5)
    })

    it('The only option', (): void => {
        expect(largestTriangleArea([[1, 0], [0, 0], [0, 1]]))
            .toBeCloseTo(0.50000, 5)
    })
})
