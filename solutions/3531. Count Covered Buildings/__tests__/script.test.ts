import {countCoveredBuildings} from '../script'

describe('3531. Count Covered Buildings', (): void => {
    it('One building has at least one building in all four directions. Near', (): void => {
        expect(countCoveredBuildings(3, [[1, 2], [2, 2], [3, 2], [2, 1], [2, 3]]))
            .toBe(1)
    })

    it('No building has at least one building in all four directions.', (): void => {
        expect(countCoveredBuildings(3, [[1, 1], [1, 2], [2, 1], [2, 2]]))
            .toBe(0)
    })

    it('One building has at least one building in all four directions. Far', (): void => {
        expect(countCoveredBuildings(5, [[1, 3], [3, 2], [3, 3], [3, 5], [5, 3]]))
            .toBe(1)
    })
})
