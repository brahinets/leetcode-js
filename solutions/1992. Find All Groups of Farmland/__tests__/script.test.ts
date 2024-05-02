import {findFarmland} from '../script'

describe('1992. Find All Groups of Farmland', (): void => {

    it('No farmlands', (): void => {
        expect(findFarmland([
            [0]
        ])).toEqual([])
    })

    it('One big farmland', (): void => {
        expect(findFarmland([
            [1, 1],
            [1, 1]
        ])).toEqual([[0, 0, 1, 1]])
    })

    it('Two small farmlands', (): void => {
        expect(findFarmland([
            [0, 1],
            [1, 0]
        ])).toEqual([[0, 1, 0, 1], [1, 0, 1, 0]])
    })

    it('Two farmlands', (): void => {
        expect(findFarmland([
            [1, 0, 0],
            [0, 1, 1],
            [0, 1, 1]
        ])).toEqual([[0, 0, 0, 0], [1, 1, 2, 2]])
    })
})
