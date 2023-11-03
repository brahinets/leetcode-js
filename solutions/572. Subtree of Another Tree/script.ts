import {TreeNode} from "../../common/TreeNode"

export {TreeNode, isSubtree}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) {
        return true
    }

    if (!root || !subRoot) {
        return false
    }

    return equal(root, subRoot)
        || isSubtree(root?.left ?? null, subRoot)
        || isSubtree(root?.right ?? null, subRoot)
}

function equal(first: TreeNode | null, second: TreeNode | null): boolean {
    if (!first && !second) {
        return true
    }

    if (!first || !second) {
        return false
    }

    if (first.val !== second.val) {
        return false
    }

    return equal(first.left, second.left) && equal(first.right, second.right)
}
