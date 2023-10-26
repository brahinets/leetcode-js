import {ListNode} from "../../common/ListNode"
import {reverseLinkedList} from "../../common/list-utils"

export {reverseList, ListNode}

function reverseList(head: ListNode | null): ListNode | null {
    return reverseLinkedList(head)
}
