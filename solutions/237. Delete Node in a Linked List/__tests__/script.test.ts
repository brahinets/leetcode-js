import {deleteNode} from '../script'

import {linkedListOf} from "../../../common/list-factories"
import {ListNode} from "../../../common/ListNode"

describe('237. Delete Node in a Linked List', (): void => {

    it('Delete head node', (): void => {
        const last: ListNode = new ListNode(9)
        const middle: ListNode = new ListNode(1, last)
        const head: ListNode = new ListNode(4, middle)

        deleteNode(head)

        expect(head).toEqual(linkedListOf(1, 9))
    })

    it('Delete middle node', (): void => {
        const last: ListNode = new ListNode(9)
        const middle: ListNode = new ListNode(1, last)
        const head: ListNode = new ListNode(4, middle)

        deleteNode(middle)

        expect(head).toEqual(linkedListOf(4, 9))
    })
})
