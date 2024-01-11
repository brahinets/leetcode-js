import {maxAncestorDiff, TreeNode} from '../script'

describe('1026. Maximum Difference Between Node and Ancestor', (): void => {
    it('Multiple branches', (): void => {
        expect(maxAncestorDiff(
            new TreeNode(8,
                new TreeNode(3,
                    new TreeNode(1),
                    new TreeNode(6,
                        new TreeNode(4),
                        new TreeNode(7))),
                new TreeNode(10,
                    null,
                    new TreeNode(14,
                        new TreeNode(13))))
        )).toBe(7)
    })

    it('Single branch', (): void => {
        expect(maxAncestorDiff(
            new TreeNode(1,
                null,
                new TreeNode(2,
                    null,
                    new TreeNode(0,
                        new TreeNode(3))))
        )).toBe(3)
    })
})
