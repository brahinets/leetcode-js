import {diameterOfBinaryTree, TreeNode} from '../script'

describe('543. Diameter of Binary Tree', (): void => {

    it('Narrow Tree', (): void => {
        expect(diameterOfBinaryTree(
            new TreeNode(
                2,
                new TreeNode(2)))
        ).toBe(1)
    })

    it('Wide Tree', (): void => {
        expect(diameterOfBinaryTree(new TreeNode(
            1,
            new TreeNode(2,
                new TreeNode(15),
                new TreeNode(7)),
            new TreeNode(3))
        )).toBe(3)
    })
})
