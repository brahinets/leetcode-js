import {maximumSafenessFactor} from '../script'

describe('2812. Find the Safest Path in a Grid', (): void => {

    it('All unsafe', (): void => {
        expect(maximumSafenessFactor([
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 1]
        ])).toBe(0)
    })

    it('The only safe', (): void => {
        expect(maximumSafenessFactor([
            [0, 0, 1],
            [0, 0, 0],
            [0, 0, 0]
        ])).toBe(2)
    })

    it('Long safe', (): void => {
        expect(maximumSafenessFactor([
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0]
        ])).toBe(2)
    })
})
