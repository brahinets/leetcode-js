import {colorTheGrid} from '../script'

describe('1931. Painting a Grid With Three Different Colors', (): void => {
    it('One', (): void => {
        expect(colorTheGrid(1, 1))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(colorTheGrid(1, 2))
            .toBe(6)
    })

    it('Three', (): void => {
        expect(colorTheGrid(5, 5))
            .toBe(580986)
    })
})
