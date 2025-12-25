import {buildTree} from '../script'
import {TreeNode} from "../../../common/TreeNode"

describe('106. Construct Binary Tree from Inorder and Postorder Traversal', (): void => {
    it('Big tree', (): void => {
        expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
            .toEqual(
                new TreeNode(3,
                    new TreeNode(9),
                    new TreeNode(20,
                        new TreeNode(15),
                        new TreeNode(7))
                ))
    })

    it('Simple tree', (): void => {
        expect(buildTree([-1], [-1]))
            .toEqual(new TreeNode(-1))
    })
})
