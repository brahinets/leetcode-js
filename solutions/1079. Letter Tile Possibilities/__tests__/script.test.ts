import {numTilePossibilities} from '../script'

describe('1079. Letter Tile Possibilities', (): void => {
    it('The only', (): void => {
        expect(numTilePossibilities("V"))
            .toBe(1)
    })

    it('Few', (): void => {
        expect(numTilePossibilities("AAB"))
            .toBe(8)
    })

    it('Many', (): void => {
        expect(numTilePossibilities("AAABBC"))
            .toBe(188)
    })
})
