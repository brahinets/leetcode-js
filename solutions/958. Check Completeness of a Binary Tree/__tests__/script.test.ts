import {TreeNode, isCompleteTree} from '../script'

describe('958. Check Completeness of a Binary Tree', (): void => {
    it('Complete', (): void => {
        expect(isCompleteTree(new TreeNode(
            1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)),
            new TreeNode(3,
                new TreeNode(6))
        ))).toBe(true);
    });

    it('Incomplete', (): void => {
        expect(isCompleteTree(new TreeNode(
            1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)),
            new TreeNode(3,
                null,
                new TreeNode(7))
        ))).toBe(false);
    });
})
