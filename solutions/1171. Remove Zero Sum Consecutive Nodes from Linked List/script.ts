import {ListNode} from "../../common/ListNode"

export {removeZeroSumSublists, ListNode}

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    const originalHead: ListNode | null = new ListNode(0, head)

    let start: ListNode | null = originalHead
    while (start) {
        let sum: number = 0
        let end: ListNode | null = start.next

        while (end) {
            sum += end.val

            if (sum === 0) {
                start.next = end.next
            }

            end = end.next
        }

        start = start.next
    }

    return originalHead.next
}
