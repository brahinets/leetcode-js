import {ListNode} from "../../common/ListNode"

export {removeNthFromEnd, ListNode}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    for (let i: number = 0; i < n; i++) {
        fast = fast?.next ?? null
    }

    let prev: ListNode | null = null
    while (fast) {
        prev = slow
        slow = slow?.next ?? null
        fast = fast?.next ?? null
    }

    if (prev) {
        prev.next = slow?.next ?? null
    } else {
        head = slow?.next ?? null
    }

    return head
}
