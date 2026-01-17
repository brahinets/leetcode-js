import {largestSquareArea} from '../script'

describe('3047. Find the Largest Area of Square Inside Two Rectangles', (): void => {
    it('Two of rectangles intersect. Same size', (): void => {
        expect(largestSquareArea([[1, 1], [2, 2], [3, 1]], [[3, 3], [4, 4], [6, 6]]))
            .toBe(1)
    })


    it('Four of rectangles intersect. Same size', (): void => {
        expect(largestSquareArea([[1, 1], [1, 3], [1, 5]], [[5, 5], [5, 7], [5, 9]]))
            .toBe(4)
    })

    it('Three of rectangles intersect. Same size', (): void => {
        expect(largestSquareArea([[1, 1], [2, 2], [1, 2]], [[3, 3], [4, 4], [3, 4]]))
            .toBe(1)
    })
    it('No pair of rectangles intersect', (): void => {
        expect(largestSquareArea([[1, 1], [3, 3], [3, 1]], [[2, 2], [4, 4], [4, 2]]))
            .toBe(0)
    })
})
