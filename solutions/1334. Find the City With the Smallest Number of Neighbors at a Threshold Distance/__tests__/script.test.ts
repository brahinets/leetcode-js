import {findTheCity} from '../script'

describe('1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance', (): void => {
    it('One', (): void => {
        expect(findTheCity(4, [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], 4))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(findTheCity(5, [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]], 2))
            .toBe(0)
    })
})
