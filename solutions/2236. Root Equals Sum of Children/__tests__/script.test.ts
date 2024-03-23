import {checkTree, TreeNode} from '../script'

describe('2236. Root Equals Sum of Children', (): void => {

    it('Equals', (): void => {
        expect(checkTree(
            new TreeNode(10,
                new TreeNode(4),
                new TreeNode(6)))
        ).toBe(true)
    })

    it('Not equals', (): void => {
        expect(checkTree(
            new TreeNode(5,
                new TreeNode(3),
                new TreeNode(1)))
        ).toBe(false)
    })
})
