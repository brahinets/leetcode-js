import {ListNode} from "../../common/ListNode"

export {ListNode, insertionSortList}

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    const dummy: ListNode = new ListNode(0)
    let current: ListNode | null = head

    while (current) {
        const next: ListNode | null = current.next
        let prev: ListNode = dummy

        while (prev.next && prev.next.val < current.val) {
            prev = prev.next
        }

        current.next = prev.next
        prev.next = current
        current = next
    }

    return dummy.next
}
