import {largestPerimeter} from '../script'

describe('2971. Find Polygon With the Largest Perimeter', (): void => {

    it('Triangle', (): void => {
        expect(largestPerimeter([5, 5, 5]))
            .toBe(15)
    })

    it('Five-sides', (): void => {
        expect(largestPerimeter([1, 12, 1, 2, 5, 50, 3]))
            .toBe(12)
    })

    it('Impossible', (): void => {
        expect(largestPerimeter([5, 5, 50]))
            .toBe(-1)
    })
})
