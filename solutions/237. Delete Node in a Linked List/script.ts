import {ListNode} from "../../common/ListNode"

export {deleteNode}

function deleteNode(node: ListNode | null): void {
    if (node && node.next) {
        node.val = node.next.val
        node.next = node.next.next
    }
}
