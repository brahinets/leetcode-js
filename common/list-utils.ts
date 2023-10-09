import {ListNode} from "./ListNode"

export {linkedListToArray, ListNode}

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
