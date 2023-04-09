import {isSymmetric, TreeNode} from '../script'

describe('101. Symmetric Tree', (): void => {
    it('Symmetric', (): void => {
        expect(isSymmetric(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(3),
                    new TreeNode(4)),
                new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(3))
            ))).toBe(true);
    });

    it('Asymmetric', (): void => {
        expect(isSymmetric(
            new TreeNode(1,
                new TreeNode(2,
                    null,
                    new TreeNode(3)),
                new TreeNode(2,
                    null,
                    new TreeNode(3))
            ))).toBe(false);
    });
})