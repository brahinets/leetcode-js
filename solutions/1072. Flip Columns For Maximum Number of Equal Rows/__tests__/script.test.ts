import {maxEqualRowsAfterFlips} from '../script'

describe('1072. Flip Columns For Maximum Number of Equal Rows', (): void => {
    it('The only row', (): void => {
        expect(maxEqualRowsAfterFlips([
            [0, 1],
            [1, 1]
        ])).toEqual(1)
    })

    it('All rows', (): void => {
        expect(maxEqualRowsAfterFlips([
            [0, 1],
            [1, 0]
        ])).toEqual(2)
    })

    it('Some rows', (): void => {
        expect(maxEqualRowsAfterFlips([
            [0, 0, 0],
            [0, 0, 1],
            [1, 1, 0]
        ])).toEqual(2)
    })
})
