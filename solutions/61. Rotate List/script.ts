import {ListNode} from "../../common/ListNode"

export {rotateRight}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) {
        return head
    }

    let length: number = 1
    let tail: ListNode = head

    while (tail.next) {
        tail = tail.next
        length++
    }

    k = k % length
    if (k === 0) {
        return head
    }

    let newTail: ListNode = head
    for (let i: number = 1; i < length - k; i++) {
        newTail = newTail.next as ListNode
    }

    const newHead: ListNode | null = newTail.next
    newTail.next = null
    tail.next = head

    return newHead
}
