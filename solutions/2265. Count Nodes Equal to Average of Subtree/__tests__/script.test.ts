import {averageOfSubtree, TreeNode} from "../script"

describe('2265. Count Nodes Equal to Average of Subtree', (): void => {

    it('No nodes equals to average', (): void => {
        expect(averageOfSubtree(
            new TreeNode(1,
                new TreeNode(3),
                new TreeNode(100))
        )).toBe(2)
    })

    it('One node equals to average', (): void => {
        expect(averageOfSubtree(
            new TreeNode(1)
        )).toBe(1)
    })

    it('Many nodes equal to average', (): void => {
        expect(averageOfSubtree(
            new TreeNode(4,
                new TreeNode(8,
                    new TreeNode(0),
                    new TreeNode(1)),
                new TreeNode(5,
                    null,
                    new TreeNode(6)))
        )).toBe(5)
    })
})
