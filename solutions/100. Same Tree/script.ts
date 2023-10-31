export {isSameTree, TreeNode}
import {TreeNode} from '../../common/TreeNode'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true
    }

    if (!p || !q || p.val != q.val) {
        return false
    }

    return isSameNode(p.left, q.left) && isSameNode(p.right, q.right)
}

function isSameNode(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
        return true
    }

    if (!left || !right || left.val != right.val) {
        return false
    }

    return isSameNode(left.left, right.left) && isSameNode(left.right, right.right)
}
