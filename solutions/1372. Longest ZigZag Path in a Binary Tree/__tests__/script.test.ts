import {longestZigZag, TreeNode} from '../script'

describe('1372. Longest ZigZag Path in a Binary Tree', (): void => {


    it('Empty tree', (): void => {
        expect(longestZigZag(
            new TreeNode(1)
        )).toBe(0);
    });

    it('Highest from node', (): void => {
        expect(longestZigZag(
            new TreeNode(1,
                null,
                new TreeNode(1,
                    new TreeNode(1),
                    new TreeNode(1,
                        new TreeNode(1,
                            null,
                            new TreeNode(1,
                                null,
                                new TreeNode(1))),
                        new TreeNode(1))))
        )).toBe(4);
    });

    it('Highest from node', (): void => {
        expect(longestZigZag(
            new TreeNode(1,
                new TreeNode(1,
                    null,
                    new TreeNode(1,
                        new TreeNode(1,
                            null,
                            new TreeNode(1)),
                        new TreeNode(1))),
                new TreeNode(1))
        )).toBe(1);
    });
});