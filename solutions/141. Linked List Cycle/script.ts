import {ListNode} from "../../common/ListNode"
import {detectCycle} from "../142. Linked List Cycle II/script"

export {hasCycle, ListNode}

function hasCycle(head: ListNode | null): boolean {
    return detectCycle(head) !== null
}
