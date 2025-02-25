import {TreeNode} from "../../common/TreeNode"
import {ListNode} from "../../common/ListNode"

export {isSubPath}

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    if (!root) {
        return false
    }

    return isSubPathFrom(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
}

function isSubPathFrom(head: ListNode | null, root: TreeNode | null): boolean {
    if (!head) {
        return true
    }

    if (!root) {
        return false
    }

    if (head.val !== root.val) {
        return false
    }

    return isSubPathFrom(head.next, root.left) || isSubPathFrom(head.next, root.right)
}
