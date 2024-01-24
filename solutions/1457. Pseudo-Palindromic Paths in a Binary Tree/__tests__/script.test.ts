import {pseudoPalindromicPaths, TreeNode} from '../script'

describe('1457. Pseudo-Palindromic Paths in a Binary Tree', (): void => {

    it('Simple tree. Does not require permutations', (): void => {
        expect(pseudoPalindromicPaths(
            new TreeNode(9)
        )).toBe(1)
    })

    it('Same depth tree. Require permutations', (): void => {
        expect(pseudoPalindromicPaths(
            new TreeNode(2,
                new TreeNode(3,
                    new TreeNode(3),
                    new TreeNode(1)),
                new TreeNode(1,
                    null,
                    new TreeNode(1)))
        )).toBe(2)
    })

    it('Different depth tree. Require permutations', (): void => {
        expect(pseudoPalindromicPaths(
            new TreeNode(2,
                new TreeNode(1,
                    new TreeNode(1),
                    new TreeNode(3,
                        null,
                        new TreeNode(1))),
                new TreeNode(1))
        )).toBe(1)
    })
})
