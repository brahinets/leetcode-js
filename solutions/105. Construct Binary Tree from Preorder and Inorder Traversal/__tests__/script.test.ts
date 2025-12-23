import {buildTree} from '../script'
import {TreeNode} from "../../../common/TreeNode"

describe('105. Construct Binary Tree from Preorder and Inorder Traversal', (): void => {
    it('Can construct', (): void => {
        expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
            .toEqual(
                new TreeNode(3,
                    new TreeNode(9),
                    new TreeNode(20,
                        new TreeNode(15),
                        new TreeNode(7))
                ))
    })

    it('Cannot construct', (): void => {
        expect(buildTree([-1], [-1]))
            .toEqual(new TreeNode(-1))
    })
})
