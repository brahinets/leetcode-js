import {ListNode} from "./ListNode"

export {linkedListToArray, ListNode}
export {linkedListMiddleNode, reverseLinkedList};

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
    let long: ListNode | null = head
    let result: ListNode | null = head

    while (long && long.next && result) {
        long = long.next.next

        result = result.next
    }

    return result
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null

    while (head) {
        newHead = new ListNode(head.val, newHead)

        head = head.next
    }

    return newHead
}
