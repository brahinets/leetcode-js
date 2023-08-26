import {ListNode, sortedListToBST, TreeNode} from '../script'

describe('109. Convert Sorted List to Binary Search Tree', (): void => {
    it('Empty Tree', (): void => {
        expect(sortedListToBST(
            new ListNode(-10,
                new ListNode(-3,
                    new ListNode(0,
                        new ListNode(5,
                            new ListNode(9))))))
        ).toStrictEqual(
            new TreeNode(0,
                new TreeNode(-3,
                    new TreeNode(-10),
                    null),
                new TreeNode(9,
                    new TreeNode(5))
            ))
    })

    it('Empty Tree', (): void => {
        expect(sortedListToBST(
            new ListNode())
        ).toStrictEqual(
            new TreeNode()
        )
    })
})
