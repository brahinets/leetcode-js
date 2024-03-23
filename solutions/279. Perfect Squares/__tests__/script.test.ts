import {numSquares} from '../script'

describe('279. Perfect Squares', (): void => {

    it('One perfect squares', (): void => {
        expect(numSquares(4))
            .toBe(1)
    })

    it('Multiple same perfect squares', (): void => {
        expect(numSquares(12))
            .toBe(3)
    })

    it('Multiple different perfect squares', (): void => {
        expect(numSquares(13))
            .toBe(2)
    })
})
