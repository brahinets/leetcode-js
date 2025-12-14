import {recoverTree} from '../script'
import {arrayToTree, TreeNode} from "../../../common/tree-utils"

describe('99. Recover Binary Search Tree', (): void => {
    it('One', (): void => {
        const root: TreeNode | null = arrayToTree([1, 3, null, null, 2])

        recoverTree(root)

        expect(root)
            .toEqual(arrayToTree([3, 1, null, null, 2]))
    })

    it('Two', (): void => {
        const root: TreeNode | null = arrayToTree([3, 1, 4, null, null, 2])

        recoverTree(root)

        expect(root)
            .toEqual(arrayToTree([2, 1, 4, null, null, 3]))
    })
})
