import {rangeSumBST, TreeNode} from "../script"

describe('938. Range Sum of BST', (): void => {

    it('Same depth tree', (): void => {
        expect(rangeSumBST(
            new TreeNode(10,
                new TreeNode(5,
                    new TreeNode(3),
                    new TreeNode(7)),
                new TreeNode(15,
                    new TreeNode(18))
            ), 7, 15)
        ).toBe(32)
    })

    it('Lefty tree', (): void => {
        expect(rangeSumBST(
            new TreeNode(10,
                new TreeNode(5,
                    new TreeNode(3,
                        new TreeNode(1)),
                    new TreeNode(7,
                        new TreeNode(6))),
                new TreeNode(15,
                    new TreeNode(13),
                    new TreeNode(18))
            ), 6, 10)
        ).toBe(23)
    })
})
