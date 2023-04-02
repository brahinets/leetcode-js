import {lowestCommonAncestor, TreeNode} from '../script'

describe('235. Lowest Common Ancestor of a Binary Search Tree', (): void => {
    it('First and second are siblings', (): void => {
        expect(lowestCommonAncestor(
            new TreeNode(6,
                new TreeNode(2,
                    new TreeNode(0),
                    new TreeNode(4,
                        new TreeNode(3),
                        new TreeNode(5))
                ),
                new TreeNode(8,
                    new TreeNode(7),
                    new TreeNode(9))
            ),
            new TreeNode(2),
            new TreeNode(8)
        )).toStrictEqual(new TreeNode(6,
            new TreeNode(2,
                new TreeNode(0),
                new TreeNode(4,
                    new TreeNode(3),
                    new TreeNode(5))
            ),
            new TreeNode(8,
                new TreeNode(7),
                new TreeNode(9))
        ));
    });

    it('First and second are parent and child', (): void => {
        expect(lowestCommonAncestor(
            new TreeNode(6,
                new TreeNode(2,
                    new TreeNode(0),
                    new TreeNode(4,
                        new TreeNode(3),
                        new TreeNode(5))
                ),
                new TreeNode(8,
                    new TreeNode(7),
                    new TreeNode(9))
            ),
            new TreeNode(2),
            new TreeNode(4)
        )).toStrictEqual(new TreeNode(2,
            new TreeNode(0),
            new TreeNode(4,
                new TreeNode(3),
                new TreeNode(5))
        ));
    });

    it('First and second are parent and child. Small tree', (): void => {
        expect(lowestCommonAncestor(
            new TreeNode(2,
                new TreeNode(1)),
            new TreeNode(2),
            new TreeNode(1)
        )).toStrictEqual(
            new TreeNode(2,
                new TreeNode(1))
        );
    });
});