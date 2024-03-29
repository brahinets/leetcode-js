import {largestValues, TreeNode} from "../script"

describe('515. Find Largest Value in Each Tree Row', (): void => {

    it('One-level tree', (): void => {
        expect(largestValues(
            new TreeNode(1)
        )).toEqual([1])
    })

    it('Two-level tree', (): void => {
        expect(largestValues(
            new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3))
        )).toEqual([1, 3])
    })

    it('Max is zero', (): void => {
        expect(largestValues(
            new TreeNode(1,
                new TreeNode(-3),
                new TreeNode(0))
        )).toEqual([1, 0])
    })

    it('Multi-level tree', (): void => {
        expect(largestValues(
            new TreeNode(1,
                new TreeNode(3,
                    new TreeNode(5),
                    new TreeNode(3)),
                new TreeNode(2,
                    null,
                    new TreeNode(9)))
        )).toEqual([1, 3, 9])
    })
})
