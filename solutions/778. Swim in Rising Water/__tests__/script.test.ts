import {swimInWater} from '../script'

describe('778. Swim in Rising Water', (): void => {
    it('Cannot go anywhere', (): void => {
        expect(swimInWater([
            [0, 2],
            [1, 3]
        ])).toBe(3)
    })

    it('Can swim', (): void => {
        expect(swimInWater([
            [0, 1, 2, 3, 4],
            [24, 23, 22, 21, 5],
            [12, 13, 14, 15, 16],
            [11, 17, 18, 19, 20],
            [10, 9, 8, 7, 6]
        ])).toBe(16)
    })
})
