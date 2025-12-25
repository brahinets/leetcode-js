import {hasPathSum} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('112. Path Sum', (): void => {
    it('Has root-to-leaf path with target sum', (): void => {
        expect(hasPathSum(arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22))
            .toBe(true)
    })

    it('No root-to-leaf path with target sum', (): void => {
        expect(hasPathSum(arrayToTree([1, 2, 3]), 5))
            .toBe(false)
    })

    it('Empty tree', (): void => {
        expect(hasPathSum(arrayToTree([]), 0))
            .toBe(false)
    })
})
