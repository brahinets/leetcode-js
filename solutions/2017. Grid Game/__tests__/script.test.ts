import {gridGame} from '../script'

describe('2017. Grid Game', (): void => {
    it('One', (): void => {
        expect(gridGame([[2, 5, 4], [1, 5, 1]]))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(gridGame([[3, 3, 1], [8, 5, 2]]))
            .toBe(4)
    })

    it('Three', (): void => {
        expect(gridGame([[1, 3, 1, 15], [1, 3, 3, 1]]))
            .toBe(7)
    })
})
