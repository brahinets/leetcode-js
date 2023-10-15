import {ListNode} from "../../common/ListNode"
import {reverseList} from "../206. Reverse Linked List/script";

import {linkedListMiddleNode} from "../../common/list-utils";

export {reorderList, ListNode}

function reorderList(head: ListNode | null): void {
    let secondHalf: ListNode | null = reverseList(linkedListMiddleNode(head))
    let firstHalf: ListNode | null = reverseList(linkedListMiddleNode(reverseList(head)))

    let odd: boolean = true
    while (head) {
        if (odd && firstHalf) {
            head.val = firstHalf.val
            firstHalf = firstHalf.next
        } else if (!odd && secondHalf) {
            head.val = secondHalf.val
            secondHalf = secondHalf.next
        }

        head = head.next
        odd = !odd
    }
}
