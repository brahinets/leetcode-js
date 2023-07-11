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
});
