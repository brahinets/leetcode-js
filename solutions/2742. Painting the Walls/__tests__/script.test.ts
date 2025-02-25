import {paintWalls} from '../script'

describe('2742. Painting the Walls', (): void => {
    it('Use free painter', (): void => {
        expect(paintWalls([1, 2, 3, 2], [1, 2, 3, 2]))
            .toBe(3)
    })

    it('Use free painter #2', (): void => {
        expect(paintWalls([2, 3, 4, 2], [1, 1, 1, 1]))
            .toBe(4)
    })

    it('Do not use free painter', (): void => {
        expect(paintWalls([1], [1]))
            .toBe(1)
    })
})
