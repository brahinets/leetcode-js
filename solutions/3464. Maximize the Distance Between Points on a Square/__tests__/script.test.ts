import { maxDistance } from '../script'

describe('3464. Maximize the Distance Between Points on a Square', (): void => {
    it('One', (): void => {
        expect(maxDistance(2, [[0, 2], [2, 0], [2, 2], [0, 0]], 4))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(maxDistance(2, [[0, 0], [1, 2], [2, 0], [2, 2], [2, 1]], 4))
            .toBe(1)
    })

    it('Three', (): void => {
        expect(maxDistance(2, [[0, 0], [0, 1], [0, 2], [1, 2], [2, 0], [2, 2], [2, 1]], 5))
            .toBe(1)
    })
})
