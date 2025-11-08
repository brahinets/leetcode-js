import {ListNode} from "../../common/ListNode"

export {reverseBetween, ListNode}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (head === null || left === right) {
        return head
    }

    const dummy: ListNode = new ListNode(0, head)
    let prev: ListNode | null = dummy
    for (let i: number = 1; i < left; i++) {
        prev = prev!.next
    }

    const reverseStart: ListNode | null = prev!.next
    let curr: ListNode | null = reverseStart!.next
    for (let i: number = left; i < right; i++) {
        reverseStart!.next = curr!.next
        curr!.next = prev!.next
        prev!.next = curr
        curr = reverseStart!.next
    }

    return dummy.next
}
