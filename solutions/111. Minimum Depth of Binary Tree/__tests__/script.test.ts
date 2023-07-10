import {minDepth, TreeNode} from '../script'

describe('111. Minimum Depth of Binary Tree', (): void => {
    it('Empty Tree', (): void => {
        expect(minDepth(null)).toBe(0);
    });

    it('Righty Tree', (): void => {
        expect(minDepth(new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7))
        ))).toBe(2);
    });

    it('Lefty Tree', (): void => {
        expect(minDepth(new TreeNode(
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
        ))).toBe(5);
    });
});
