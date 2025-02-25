import {ListNode} from "../../common/ListNode"

export {mergeNodes}

function mergeNodes(head: ListNode | null): ListNode | null {
    head = head?.next ?? null
    if (!head) {
        return head
    }

    let tmp: ListNode | null = head
    let sum: number = 0
    while (tmp && tmp.val !== 0) {
        sum += tmp.val
        tmp = tmp.next
    }

    head.val = sum
    head.next = mergeNodes(tmp)

    return head
}
