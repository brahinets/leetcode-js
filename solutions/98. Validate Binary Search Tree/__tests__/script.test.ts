import {isValidBST, TreeNode} from '../script'

describe('98. Validate Binary Search Tree', (): void => {
    it('Valid tree', (): void => {
        expect(isValidBST(
            new TreeNode(2,
                new TreeNode(1),
                new TreeNode(3)
            ))
        ).toBe(true)
    })

    it('Valid tree that obeys parent limits', (): void => {
        expect(isValidBST(
            new TreeNode(3,
                new TreeNode(1,
                    new TreeNode(0),
                    new TreeNode(2)),
                new TreeNode(5,
                    new TreeNode(4),
                    new TreeNode(6))
            ))
        ).toBe(true)
    })

    it('Invalid tree. Should be strictly smaller/bigger', (): void => {
        expect(isValidBST(
                new TreeNode(2,
                    new TreeNode(2),
                    new TreeNode(2))
            )
        ).toBe(false)
    })

    it('Invalid tree. Should obey parent limits', (): void => {
        expect(isValidBST(
            new TreeNode(5,
                new TreeNode(1),
                new TreeNode(6,
                    new TreeNode(3),
                    new TreeNode(7))
            ))
        ).toBe(false)
    })
})
