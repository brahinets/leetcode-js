import {rightSideView, TreeNode} from '../script'

describe('199. Binary Tree Right Side View', (): void => {

    it('Empty tree', (): void => {
        expect(rightSideView(null))
            .toEqual([])
    })

    it('Short tree', (): void => {
        expect(rightSideView(
            new TreeNode(1,
                null,
                new TreeNode(3)
            )
        )).toEqual([1, 3])
    })

    it('Long tree', (): void => {
        expect(rightSideView(
            new TreeNode(1,
                new TreeNode(2,
                    null,
                    new TreeNode(5)),
                new TreeNode(3,
                    null,
                    new TreeNode(4))
            )
        )).toEqual([1, 3, 4])
    })
})
