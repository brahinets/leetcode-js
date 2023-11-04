import {levelOrder, TreeNode} from '../script'

describe('102. Binary Tree Level Order Traversal', (): void => {
    it('Empty tree', (): void => {
        expect(levelOrder(null))
            .toStrictEqual([])
    })

    it('Small tree', (): void => {
        expect(levelOrder(new TreeNode(1)))
            .toStrictEqual([[1]])
    })

    it('Big tree', (): void => {
        expect(levelOrder(new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7)
            )))
        ).toStrictEqual([[3], [9, 20], [15, 7]])
    })
})
