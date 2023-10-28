import {isBalanced, TreeNode} from '../script'

describe('110. Balanced Binary Tree', (): void => {

    it('Balanced empty', (): void => {
        expect(isBalanced(new TreeNode()))
            .toBe(true)
    })

    it('Balanced non empty', (): void => {
        expect(isBalanced(
            new TreeNode(
                3,
                new TreeNode(9),
                new TreeNode(20,
                    new TreeNode(15),
                    new TreeNode(7)))
        )).toBe(true)
    })

    it('Non balanced non with delta more than one', (): void => {
        expect(isBalanced(
            new TreeNode(
                1,
                new TreeNode(2,
                    new TreeNode(3,
                        new TreeNode(4),
                        new TreeNode(4)),
                    new TreeNode(3)),
                new TreeNode(2))
        )).toBe(false)
    })
})
