import {ListNode} from "../../common/ListNode"

export {middleNode, ListNode}
function middleNode(head: ListNode | null): ListNode | null {
    let long: ListNode | null = head
    let result: ListNode | null = head

    while (long && long.next && result) {
        long = long.next.next

        result = result.next
    }

    return result
}
