import {ListNode} from "../../common/ListNode"

export {removeNodes, ListNode}

function removeNodes(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    const next: ListNode | null = removeNodes(head.next)
    if (next && next.val > head.val) {
        return next
    }

    head.next = next

    return head
}
