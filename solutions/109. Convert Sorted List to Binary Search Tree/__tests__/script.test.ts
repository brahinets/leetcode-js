import {ListNode, sortedListToBST, TreeNode} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('109. Convert Sorted List to Binary Search Tree', (): void => {
    it('Empty Tree', (): void => {
        expect(sortedListToBST(linkedListOf(-10, -3, 0, 5, 9)))
            .toStrictEqual(
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
