import {findMode, TreeNode} from "../script"

describe('501. Find Mode in Binary Search Tree', (): void => {

    it('No max', (): void => {
        expect(findMode(null))
            .toEqual([])
    })

    it('One max', (): void => {
        expect(findMode(
            new TreeNode(0)
        )).toEqual([0])
    })

    it('One max again', (): void => {
        expect(findMode(
            new TreeNode(1,
                null,
                new TreeNode(2,
                    null,
                    new TreeNode(2)))
        )).toEqual([2])
    })

    it('Multiple max', (): void => {
        expect(findMode(
            new TreeNode(1,
                new TreeNode(3),
                new TreeNode(2,
                    new TreeNode(3),
                    new TreeNode(2)))
        )).toEqual([3, 2])
    })
})
