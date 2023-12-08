import {tree2str, TreeNode} from '../script'

describe('606. Construct String from Binary Tree', (): void => {

    it('Empty tree', (): void => {
        expect(tree2str(null))
            .toBe("")
    })

    it('Lefty tree', (): void => {
        expect(tree2str(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4)),
                new TreeNode(3))))
            .toBe("1(2(4))(3)")
    })

    it('Righty tree', (): void => {
        expect(tree2str(
            new TreeNode(
                1,
                new TreeNode(2,
                    null,
                    new TreeNode(4)),
                new TreeNode(3
                )))
        ).toBe("1(2()(4))(3)")
    })
})
