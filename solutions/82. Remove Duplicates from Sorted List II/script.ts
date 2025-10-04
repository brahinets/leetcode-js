import {ListNode} from "../../common/ListNode"

export {deleteDuplicates}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode(0, head)
    let prev: ListNode = dummy
    let current: ListNode | null = head

    while (current) {
        let hasDuplicate: boolean = false
        while (current.next && current.val === current.next.val) {
            hasDuplicate = true
            current = current.next
        }

        if (hasDuplicate) {
            prev.next = current.next
        } else {
            prev = prev.next!
        }

        current = current.next
    }

    return dummy.next
}
