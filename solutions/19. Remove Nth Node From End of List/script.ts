import {ListNode} from "../../common/ListNode"

export {removeNthFromEnd, ListNode}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const len: number = size(head)

    let node: number = len - n
    if (node === 0) {
        return head?.next ?? null
    }

    let iter: ListNode | null = head
    while (iter) {
        if (node === 1 && iter?.next) {
            iter.next = iter?.next?.next
            break
        } else {
            iter = iter.next
        }

        node--
    }

    return head
}

function size(head: ListNode | null): number {
    let size: number = 0

    while (head) {
        head = head.next
        size++
    }

    return size
}
