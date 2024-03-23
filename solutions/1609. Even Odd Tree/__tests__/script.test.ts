import {isEvenOddTree, TreeNode} from '../script'

describe('1609. Even Odd Tree', (): void => {

    it('Good tree', (): void => {
        expect(isEvenOddTree(
            new TreeNode(1,
                new TreeNode(10,
                    new TreeNode(3,
                        new TreeNode(12),
                        new TreeNode(8)),
                    null),
                new TreeNode(4,
                    new TreeNode(7,
                        new TreeNode(6),
                        null),
                    new TreeNode(9,
                        null,
                        new TreeNode(2))))
        )).toBe(true)
    })

    it('Not strictly increasing', (): void => {
        expect(isEvenOddTree(
            new TreeNode(5,
                new TreeNode(4,
                    new TreeNode(3),
                    new TreeNode(3)),
                new TreeNode(2,
                    new TreeNode(7),
                    null))
        )).toBe(false)
    })

    it('Not even level', (): void => {
        expect(isEvenOddTree(
            new TreeNode(5,
                new TreeNode(9,
                    new TreeNode(3),
                    new TreeNode(5)),
                new TreeNode(1,
                    new TreeNode(7),
                    null))
        )).toBe(false)
    })
})
