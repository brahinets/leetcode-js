import {inorderTraversal, TreeNode} from '../script'

describe('102. Binary Tree Level Order Traversal', (): void => {
    it('Empty tree', (): void => {
        expect(inorderTraversal(null))
            .toEqual([])
    })


    it('Small tree', (): void => {
        expect(inorderTraversal(new TreeNode(1)))
            .toEqual([1])
    })

    it('Big tree', (): void => {
        expect(inorderTraversal(
            new TreeNode(1,
                null,
                new TreeNode(2,
                    new TreeNode(3)))))
            .toEqual([1, 3, 2])
    })
})
