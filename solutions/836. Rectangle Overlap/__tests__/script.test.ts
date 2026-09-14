import {isRectangleOverlap} from '../script'

describe('836. Rectangle Overlap', (): void => {
    it('rectangles overlap in the middle', (): void => {
        expect(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]))
            .toBe(true)
    })

    it('rectangles only share an edge', (): void => {
        expect(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]))
            .toBe(false)
    })

    it('rectangles are completely separate', (): void => {
        expect(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]))
            .toBe(false)
    })

    it('rectangles only touch at a corner', (): void => {
        expect(isRectangleOverlap([0, 0, 1, 1], [1, 1, 2, 2]))
            .toBe(false)
    })

    it('one rectangle fully contains another', (): void => {
        expect(isRectangleOverlap([0, 0, 10, 10], [2, 2, 3, 3]))
            .toBe(true)
    })

    it('rectangles overlap only horizontally but not vertically', (): void => {
        expect(isRectangleOverlap([0, 0, 2, 2], [1, 3, 3, 5]))
            .toBe(false)
    })

    it('coordinates at the extreme constraint boundaries', (): void => {
        expect(isRectangleOverlap([-1000000000, -1000000000, 1000000000, 1000000000], [-1, -1, 1, 1]))
            .toBe(true)
    })
})
