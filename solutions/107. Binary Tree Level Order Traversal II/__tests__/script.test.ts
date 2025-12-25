import {levelOrderBottom} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('107. Binary Tree Level Order Traversal II', (): void => {
    it('Complex tree', (): void => {
        expect(levelOrderBottom(arrayToTree([3, 9, 20, null, null, 15, 7])))
            .toEqual([[15, 7], [9, 20], [3]])
    })

    it('Simple tree', (): void => {
        expect(levelOrderBottom(arrayToTree([1])))
            .toEqual([[1]])
    })

    it('Empty tree', (): void => {
        expect(levelOrderBottom(arrayToTree([])))
            .toEqual([])
    })
})
