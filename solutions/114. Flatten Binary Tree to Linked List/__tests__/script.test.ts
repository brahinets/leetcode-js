import {flatten} from '../script'
import {arrayToTree, TreeNode} from "../../../common/tree-utils"

describe('114. Flatten Binary Tree to Linked List', (): void => {
    it('Complex tree', (): void => {
        const tree: TreeNode | null = arrayToTree([1, 2, 5, 3, 4, null, 6])

        flatten(tree)

        expect(tree).toEqual(arrayToTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]))
    })

    it('Simple tree', (): void => {
        const tree: TreeNode | null = arrayToTree([1])

        flatten(tree)

        expect(tree).toEqual(arrayToTree([1]))
    })

    it('Empty tree', (): void => {
        const tree: TreeNode | null = arrayToTree([])

        flatten(tree)

        expect(tree).toEqual(arrayToTree([]))
    })
})
