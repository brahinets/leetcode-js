import {leafSimilar, TreeNode} from '../script'

describe('872. Leaf-Similar Trees', (): void => {

    it('Similar', (): void => {
        expect(leafSimilar(
            new TreeNode(3,
                new TreeNode(5,
                    new TreeNode(6),
                    new TreeNode(2,
                        new TreeNode(7),
                        new TreeNode(4))),
                new TreeNode(1,
                    new TreeNode(9),
                    new TreeNode(8))),

            new TreeNode(3,
                new TreeNode(5,
                    new TreeNode(6),
                    new TreeNode(7)),
                new TreeNode(1,
                    new TreeNode(4),
                    new TreeNode(2,
                        new TreeNode(9),
                        new TreeNode(8))))
        )).toBe(true)
    })

    it('Not Similar', (): void => {
        expect(leafSimilar(
            new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3)),
            new TreeNode(1,
                new TreeNode(3),
                new TreeNode(2))
        )).toBe(false)
    })
})
