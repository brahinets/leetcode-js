import {getMaximumGold} from '../script'

describe('1219. Path with Maximum Gold', (): void => {

    it('Short', (): void => {
        expect(getMaximumGold([
            [1]
        ])).toBe(1)
    })

    it('Medium', (): void => {
        expect(getMaximumGold([
            [0, 6, 0],
            [5, 8, 7],
            [0, 9, 0]
        ])).toBe(24)
    })

    it('Long', (): void => {
        expect(getMaximumGold([
            [1, 0, 7],
            [2, 0, 6],
            [3, 4, 5],
            [0, 3, 0],
            [9, 0, 20]
        ])).toBe(28)
    })
})
