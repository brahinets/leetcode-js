import {getMinimumDifference, TreeNode} from "../script";

describe('530. Minimum Absolute Difference in BST', (): void => {

    it('Lefty tree', (): void => {
        expect(getMinimumDifference(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(1),
                    new TreeNode(3)),
                new TreeNode(6)
            ))
        ).toBe(1);
    });

    it('Righty tree', (): void => {
        expect(getMinimumDifference(
            new TreeNode(1,
                new TreeNode(0),
                new TreeNode(48,
                    new TreeNode(12),
                    new TreeNode(41))
            ))
        ).toBe(1);
    });

    it('Full tree', (): void => {
        expect(getMinimumDifference(
            new TreeNode(1,
                new TreeNode(0,
                    new TreeNode(13),
                    new TreeNode(40)),
                new TreeNode(48,
                    new TreeNode(12),
                    new TreeNode(41))
            ))
        ).toBe(1);
    });

    it('Full partial tree', (): void => {
        expect(getMinimumDifference(
            new TreeNode(543,
                new TreeNode(384,
                    null,
                    new TreeNode(445)),
                new TreeNode(652,
                    null,
                    new TreeNode(699))
            ))
        ).toBe(47);
    });
});
