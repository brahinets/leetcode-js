import {findRedundantConnection} from '../script'

describe('684. Redundant Connection', (): void => {
    it('One', (): void => {
        expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))
            .toEqual([2, 3])
    })

    it('Two', (): void => {
        expect(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
            .toEqual([1, 4])
    })
})
