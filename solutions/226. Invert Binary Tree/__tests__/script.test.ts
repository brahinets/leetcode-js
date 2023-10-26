import {invertTree, TreeNode} from "../script"

describe('226. Invert Binary Tree', (): void => {
    it('Empty tree', (): void => {
        expect(invertTree(null))
            .toBe(null)
    })

    it('Root tree', (): void => {
        expect(invertTree(new TreeNode(1)))
            .toEqual(new TreeNode(1))
    })

    it('Short tree', (): void => {
        expect(invertTree(
            new TreeNode(2,
                new TreeNode(1),
                new TreeNode(3))
        )).toEqual(
            new TreeNode(2,
                new TreeNode(3),
                new TreeNode(1))
        )
    })

    it('Deep tree', (): void => {
        expect(invertTree(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(1),
                    new TreeNode(3)),
                new TreeNode(7,
                    new TreeNode(6),
                    new TreeNode(9)))
        )).toEqual(
            new TreeNode(4,
                new TreeNode(7,
                    new TreeNode(9),
                    new TreeNode(6)),
                new TreeNode(2,
                    new TreeNode(3),
                    new TreeNode(1))))
    })
})
