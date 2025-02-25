import {numMagicSquaresInside} from '../script'

describe('840. Magic Squares In Grid', (): void => {
    it('One magic square inside the given grid', (): void => {
        expect(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]))
            .toBe(1)
    })

    it('No magic squares inside the given grid', (): void => {
        expect(numMagicSquaresInside([[8]]))
            .toBe(0)
    })
})
