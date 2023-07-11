import {distanceK, TreeNode} from '../script'

describe('863. All Nodes Distance K in Binary Tree', (): void => {
    it('Zero elements with distance for empty tree', (): void => {
        expect(distanceK(null, null, 3))
            .toStrictEqual([]);
    });

    it('Zero elements with distance, when node not found', (): void => {
        expect(distanceK(new TreeNode(1), new TreeNode(2), 3))
            .toStrictEqual([]);
    });

    it('Zero elements with distance, when node found', (): void => {
        expect(distanceK(new TreeNode(1), new TreeNode(1), 3))
            .toStrictEqual([]);
    });

    it('Some elements with distance, when node found', (): void => {
        expect(distanceK(
            new TreeNode(1,
                new TreeNode(5,
                    new TreeNode(6),
                    new TreeNode(2,
                        new TreeNode(7),
                        new TreeNode(4))),
                null),
            new TreeNode(5),
            3
        )).toStrictEqual([7, 4]);
    });
});
