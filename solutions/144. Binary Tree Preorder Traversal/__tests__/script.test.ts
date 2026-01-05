import {postorderTraversal} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('144. Binary Tree Preorder Traversal', (): void => {
    it('Big tree', (): void => {
        expect(postorderTraversal(arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])))
            .toEqual([1, 2, 4, 5, 6, 7, 3, 8, 9])
    })

    it('Simple tree', (): void => {
        expect(postorderTraversal(arrayToTree([1, null, 2, 3])))
            .toEqual([1, 2, 3])
    })

    it('Very simple tree', (): void => {
        expect(postorderTraversal(arrayToTree([1])))
            .toEqual([1])
    })

    it('Empty tree', (): void => {
        expect(postorderTraversal(arrayToTree([])))
            .toEqual([])
    })
})
