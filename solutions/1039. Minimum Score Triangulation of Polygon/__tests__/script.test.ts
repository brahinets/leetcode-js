import {minScoreTriangulation} from '../script'

describe('1039. Minimum Score Triangulation of Polygon', (): void => {
    it('The polygon is already triangulated', (): void => {
        expect(minScoreTriangulation([1, 2, 3]))
            .toBe(6)
    })

    it('There are two triangulations', (): void => {
        expect(minScoreTriangulation([3, 7, 4, 5]))
            .toBe(144)
    })

    it('There are many triangulations', (): void => {
        expect(minScoreTriangulation([1, 3, 1, 4, 1, 5]))
            .toBe(13)
    })
})
