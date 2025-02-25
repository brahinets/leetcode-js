import {leftmostBuildingQueries} from '../script'

describe('2940. Find Building Where Alice and Bob Can Meet', (): void => {
    it('One', (): void => {
        expect(leftmostBuildingQueries([6, 4, 8, 5, 2, 7], [[0, 1], [0, 3], [2, 4], [3, 4], [2, 2]]))
            .toEqual([2, 5, -1, 5, 2])
    })

    it('Two', (): void => {
        expect(leftmostBuildingQueries([5, 3, 8, 2, 6, 1, 4, 6], [[0, 7], [3, 5], [5, 2], [3, 0], [1, 6]]))
            .toEqual([7, 6, -1, 4, 6])
    })
})
