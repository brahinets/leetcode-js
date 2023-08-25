import {TreeNode, zigzagLevelOrder} from '../script'

describe('103. Binary Tree Zigzag Level Order Traversal', (): void => {

    it('Righty Tree', (): void => {
        expect(zigzagLevelOrder(new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20,
                new TreeNode(15),
                new TreeNode(7))
        ))).toStrictEqual([[3], [20, 9], [15, 7]])
    })

    it('Short Tree', (): void => {
        expect(zigzagLevelOrder(new TreeNode(1)))
            .toStrictEqual([[1]])
    })

    it('Empty Tree', (): void => {
        expect(zigzagLevelOrder(null))
            .toStrictEqual([[]])
    })
})
