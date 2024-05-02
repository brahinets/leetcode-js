import {findMinHeightTrees} from '../script'

describe('310. Minimum Height Trees', (): void => {
    it('Nothing', (): void => {
        expect(findMinHeightTrees(1, []))
            .toStrictEqual([0])
    })

    it('Short', (): void => {
        expect(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]))
            .toStrictEqual([1])
    })

    it('Longer', (): void => {
        expect(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]))
            .toStrictEqual([3,4])
    })
})
