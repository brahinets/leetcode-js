import {minimumCost} from '../script'

describe('3108. Minimum Cost Walk in Weighted Graph', (): void => {
    it('Some', (): void => {
        expect(minimumCost(5, [[0, 1, 7], [1, 3, 7], [1, 2, 1]], [[0, 3], [3, 4]]))
            .toEqual([1, -1])
    })

    it('Zero', (): void => {
        expect(minimumCost(3, [[0, 2, 7], [0, 1, 15], [1, 2, 6], [1, 2, 1]], [[1, 2]]))
            .toEqual([0])
    })
})
