import {sumOfDistancesInTree} from '../script'

describe('834. Sum of Distances in Tree', (): void => {
    it('Empty tree', (): void => {
        expect(sumOfDistancesInTree(1, []))
            .toStrictEqual([0])
    })

    it('Small tree', (): void => {
        expect(sumOfDistancesInTree(2, [[1, 0]]))
            .toStrictEqual([1, 1])
    })

    it('Big tree', (): void => {
        expect(sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]))
            .toStrictEqual([8, 12, 6, 10, 10, 10])
    })
})
