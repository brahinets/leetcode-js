import {ListNode} from "./ListNode"

export {linkedListOf}

function linkedListOf(...values: number[]): ListNode | null {
    if (values.length === 0) {
        return null
    }

    const head: ListNode | null = new ListNode(values[0])
    let tail: ListNode | null = head
    for (let i: number = 1; i < values.length; i++) {
        tail.next = new ListNode(values[i])
        tail = tail.next
    }

    return head
}
