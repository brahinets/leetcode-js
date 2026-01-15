import {maximizeSquareHoleArea} from '../script'

describe('2943. Maximize Area of Square Hole in Grid', (): void => {
    it('Remove central bar', (): void => {
        expect(maximizeSquareHoleArea(2, 1, [2, 3], [2]))
            .toBe(4)
    })

    it('Remove top bar', (): void => {
        expect(maximizeSquareHoleArea(1, 1, [2], [2]))
            .toBe(4)
    })

    it('Remove multiple bars', (): void => {
        expect(maximizeSquareHoleArea(2, 3, [2, 3], [2, 4]))
            .toBe(4)
    })
})
