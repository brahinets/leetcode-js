import {isSubtree, TreeNode} from "../script"

describe('572. Subtree of Another Tree', (): void => {

    it('Subtree', (): void => {
        expect(isSubtree(
            new TreeNode(3,
                new TreeNode(4,
                    new TreeNode(1),
                    new TreeNode(2)),
                new TreeNode(5)),
            new TreeNode(4,
                new TreeNode(1),
                new TreeNode(2))
        )).toBe(true)
    })

    it('Not a subtree', (): void => {
        expect(isSubtree(
            new TreeNode(3,
                new TreeNode(4,
                    new TreeNode(1),
                    new TreeNode(2,
                        new TreeNode(0))),
                new TreeNode(5)),
            new TreeNode(4,
                new TreeNode(1),
                new TreeNode(2))
        )).toBe(false)
    })
})
