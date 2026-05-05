import {ListNode} from "../../common/ListNode"

export {rotateRight}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    let length: number = 1
    let tail: ListNode = head

    while (tail.next) {
        tail = tail.next
        length++
    }

    const rotation: number = k % length
    if (rotation === 0) {
        return head
    }

    tail.next = head

    let newTail: ListNode = head
    for (let i: number = 0; i < length - rotation - 1; i++) {
        newTail = newTail.next as ListNode
    }

    const newHead: ListNode = newTail.next as ListNode
    newTail.next = null

    return newHead
}
