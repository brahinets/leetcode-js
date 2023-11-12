import {goodNodes, TreeNode} from "../script"

describe('1448. Count Good Nodes in Binary Tree', (): void => {
    it('Root is considered as good', (): void => {
        expect(goodNodes(
            new TreeNode(5)
        )).toBe(1)
    })

    it('Most of bottom nodes are good', (): void => {
        expect(goodNodes(
            new TreeNode(3,
                new TreeNode(3,
                    new TreeNode(4),
                    new TreeNode(2)))
        )).toBe(3)
    })

    it('Several bottom nodes are good', (): void => {
        expect(goodNodes(
            new TreeNode(3,
                new TreeNode(1,
                    new TreeNode(3)),
                new TreeNode(4,
                    new TreeNode(1),
                    new TreeNode(5)))
        )).toBe(4)
    })

    it('Some bottom nodes are good', (): void => {
        expect(goodNodes(
            new TreeNode(2,
                null,
                new TreeNode(4,
                    new TreeNode(10),
                    new TreeNode(8,
                        new TreeNode(4))))
        )).toBe(4)
    })
})
