import {minScoreTriangulation} from '../script'

describe('1039. Minimum Score Triangulation of Polygon', (): void => {
    it('One', (): void => {
        expect(minScoreTriangulation([1, 2, 3]))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(minScoreTriangulation([3, 7, 4, 5]))
            .toBe(144)
    })

    it('Three', (): void => {
        expect(minScoreTriangulation([1, 3, 1, 4, 1, 5]))
            .toBe(13)
    })
})
