import {ListNode} from "../../common/ListNode"
import {linkedListMiddleNode} from "../../common/list-utils"

export {middleNode, ListNode}

function middleNode(head: ListNode | null): ListNode | null {
    return linkedListMiddleNode(head)
}
