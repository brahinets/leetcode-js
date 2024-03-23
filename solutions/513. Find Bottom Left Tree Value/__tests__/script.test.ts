import {findBottomLeftValue, TreeNode} from '../script'

describe('513. Find Bottom Left Tree Value', (): void => {

    it('Same depth', (): void => {
        expect(findBottomLeftValue(
            new TreeNode(2,
                new TreeNode(1),
                new TreeNode(3)
            ))).toBe(1)
    })

    it('Different depth', (): void => {
        expect(findBottomLeftValue(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4),
                    null),
                new TreeNode(3,
                    new TreeNode(5,
                        new TreeNode(7)),
                    new TreeNode(6))
            ))).toBe(7)
    })
})
