import {ListNode} from '../../common/ListNode'

export {deleteMiddle}

function deleteMiddle(head: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode(0, head)
    let previousSlow: ListNode = dummy
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        previousSlow = slow!
        slow = slow!.next
    }

    previousSlow.next = slow!.next

    return dummy.next
}
