import {maxDepth, TreeNode} from '../script'

describe('104. Maximum Depth of Binary Tree', (): void => {
    it('Righty Tree', (): void => {
        expect(maxDepth(new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7))
        ))).toBe(3)
    })

    it('Lefty Tree', (): void => {
        expect(maxDepth(new TreeNode(
            2,
            new TreeNode(
                3,
                new TreeNode(
                    4,
                    new TreeNode(
                        5,
                        new TreeNode(6),
                        null),
                    null),
                null),
            null
        ))).toBe(5)
    })
})
