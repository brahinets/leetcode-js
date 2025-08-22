import {minimumArea} from '../script'

describe('3195. Find the Minimum Area to Cover All Ones I', (): void => {
    it('One', (): void => {
        expect(minimumArea([[1, 0], [0, 0]]))
            .toEqual(1)
    })

    it('Many', (): void => {
        expect(minimumArea([[0, 1, 0], [1, 0, 1]]))
            .toEqual(6)
    })
})
