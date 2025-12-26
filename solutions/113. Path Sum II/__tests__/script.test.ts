import {pathSum} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('113. Path Sum II', (): void => {
    it('There are paths whose sum equals targetSum', (): void => {
        expect(pathSum(arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22))
            .toEqual([[5, 4, 11, 2], [5, 8, 4, 5]])
    })

    it('No root-to-leaf path with target sum', (): void => {
        expect(pathSum(arrayToTree([1, 2, 3]), 5))
            .toEqual([])
    })

    it('Empty tree', (): void => {
        expect(pathSum(arrayToTree([]), 0))
            .toEqual([])
    })
})
