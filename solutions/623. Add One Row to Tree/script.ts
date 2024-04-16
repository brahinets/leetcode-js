import {ListNode} from "../../common/ListNode"
import {TreeNode} from "../../common/TreeNode"

export {addOneRow, ListNode, TreeNode}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (!root) {
        return null
    }

    if (depth === 1) {
        return new TreeNode(val, root)
    }

    if (depth === 2) {
        root.left = new TreeNode(val, root.left, null)
        root.right = new TreeNode(val, null, root.right)
    } else {
        root.left = addOneRow(root.left, val, depth - 1)
        root.right = addOneRow(root.right, val, depth - 1)
    }

    return root
}

