import {maxLevelSum, TreeNode} from "../script";

describe('1161. Maximum Level Sum of a Binary Tree', (): void => {

    it('Lefty tree', (): void => {
        expect(maxLevelSum(
            new TreeNode(1,
                new TreeNode(7,
                    new TreeNode(7),
                    new TreeNode(-8)),
                new TreeNode(0))
        )).toBe(2);
    });

    it('Righty tree', (): void => {
        expect(maxLevelSum(
            new TreeNode(989,
                null,
                new TreeNode(10250,
                    new TreeNode(98693),
                    new TreeNode(-89388,
                        null,
                        new TreeNode(-32127))))
        )).toBe(2);
    });

    it('Full tree', (): void => {
        expect(maxLevelSum(
            new TreeNode(1,
                new TreeNode(0,
                    new TreeNode(13),
                    new TreeNode(40)),
                new TreeNode(48,
                    new TreeNode(12),
                    new TreeNode(41)))
        )).toBe(3);
    });

    it('Full partial tree', (): void => {
        expect(maxLevelSum(
            new TreeNode(9999,
                new TreeNode(384,
                    null,
                    new TreeNode(445)),
                new TreeNode(652,
                    null,
                    new TreeNode(699)))
        )).toBe(1);
    });
});
