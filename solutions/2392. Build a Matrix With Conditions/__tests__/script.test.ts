import {buildMatrix} from '../script'

describe('2392. Build a Matrix With Conditions', (): void => {
    it('Can build', (): void => {
        expect(buildMatrix(3, [[1, 2], [3, 2]], [[2, 1], [3, 2]]))
            .toEqual([
                [0, 0, 1],
                [3, 0, 0],
                [0, 2, 0]
            ])
    })

    it('Cannot build', (): void => {
        expect(buildMatrix(3, [[1, 2], [2, 3], [3, 1], [2, 3]], [[2, 1]]))
            .toEqual([])
    })
})
