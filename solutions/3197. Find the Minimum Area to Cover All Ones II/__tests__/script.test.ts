import {minimumSum} from '../script'

describe('3197. Find the Minimum Area to Cover All Ones II', (): void => {
    it('One', (): void => {
        expect(minimumSum([[1, 0, 1], [1, 1, 1]]))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(minimumSum([[1, 0, 1, 0], [0, 1, 0, 1]]))
            .toBe(5)
    })
})
