import {ListNode} from "./ListNode"

export {linkedListToArray, ListNode}
export {linkedListMiddleNode, reverseLinkedList}

function linkedListToArray(head: ListNode | null): number[] | null {
    if (!head) {
        return null
    }

    const result: number[] = []

    while (head) {
        result.push(head.val)
        head = head.next
    }

    return result
}

function linkedListMiddleNode(head: ListNode | null): ListNode | null {
    let fast: ListNode | null = head
    let slow: ListNode | null = head

    while (fast && fast.next) {
        fast = fast.next.next

        slow = slow!.next
    }

    return slow
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null

    while (head) {
        newHead = new ListNode(head.val, newHead)

        head = head.next
    }

    return newHead
}
