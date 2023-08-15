import {ListNode} from "../../common/ListNode"

export {partition, ListNode}

function partition(head: ListNode | null, x: number): ListNode | null {
    let newHead: ListNode = new ListNode()
    let newTail: ListNode = new ListNode()
    const origHead: ListNode | null = newHead
    const origTail: ListNode | null = newTail


    while (head) {
        if (head.val < x) {
            newHead.next = new ListNode(head.val)
            newHead = newHead.next
        } else {
            newTail.next = new ListNode(head.val)
            newTail = newTail.next
        }

        head = head.next
    }

    if (newHead) {
        newHead.next = origTail.next
    }


    return origHead.next
}
