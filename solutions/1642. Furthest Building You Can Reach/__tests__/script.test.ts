import {furthestBuilding} from '../script'

describe('1642. Furthest Building You Can Reach', (): void => {
    it('Multiple house', (): void => {
        expect(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1))
            .toBe(4)
    })

    it('Many house', (): void => {
        expect(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2))
            .toBe(7)
    })

    it('Several house', (): void => {
        expect(furthestBuilding([14, 3, 19, 3], 17, 0))
            .toBe(3)
    })

    it('Better to save bricks', (): void => {
        expect(furthestBuilding([1, 5, 1, 2, 3, 4, 10000], 4, 1))
            .toBe(5)
    })
})
