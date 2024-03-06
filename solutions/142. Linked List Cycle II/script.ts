import {ListNode} from "../../common/ListNode"

export {detectCycle, ListNode}

function detectCycle(head: ListNode | null): ListNode | null {
    let fast: ListNode | null = head
    let slow: ListNode | null = head

    while (fast&& fast.next) {
        fast = fast.next.next
        slow = slow!.next

        const loopDetected: boolean = fast === slow
        if (loopDetected) {
            slow = head

            while (slow !== fast) {
                slow = slow!.next
                fast = fast!.next
            }

            return slow
        }
    }

    return null
}
