import {trapRainWater} from '../script'

describe('407. Trapping Rain Water II', (): void => {
    it('One', (): void => {
        expect(trapRainWater([
            [1, 4, 3, 1, 3, 2],
            [3, 2, 1, 3, 2, 4],
            [2, 3, 3, 2, 3, 1]
        ])).toBe(4)
    })

    it('Two', (): void => {
        expect(trapRainWater([
            [3, 3, 3, 3, 3],
            [3, 2, 2, 2, 3],
            [3, 2, 1, 2, 3],
            [3, 2, 2, 2, 3],
            [3, 3, 3, 3, 3]
        ])).toBe(10)
    })
})
