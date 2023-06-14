import {minDiffInBST, TreeNode} from "../script";

describe('783. Minimum Distance Between BST Nodes', (): void => {

    it('Lefty tree', (): void => {
        expect(minDiffInBST(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(1),
                    new TreeNode(3)),
                new TreeNode(6)
            ))
        ).toBe(1);
    });

    it('Righty tree', (): void => {
        expect(minDiffInBST(
            new TreeNode(1,
                new TreeNode(0),
                new TreeNode(48,
                    new TreeNode(12),
                    new TreeNode(41))
            ))
        ).toBe(1);
    });

    it('Full tree', (): void => {
        expect(minDiffInBST(
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
        expect(minDiffInBST(
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
