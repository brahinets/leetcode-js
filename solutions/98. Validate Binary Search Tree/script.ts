import {TreeNode} from '../../common/TreeNode'

export {isValidBST, TreeNode}

function isValidBST(root: TreeNode): boolean {
    return isValidLeft(root.left, root.val, Number.MIN_SAFE_INTEGER)
        && isValidRight(root.right, root.val, Number.MAX_SAFE_INTEGER)
}

function isValidLeft(node: TreeNode | null, max: number, min: number): boolean {
    if (!node) {
        return true
    }

    if (node.val >= max || node.val <= min) {
        return false
    }

    return isValidLeft(node.left, node.val, min) && isValidRight(node.right, node.val, max)
}

function isValidRight(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) {
        return true
    }

    if (node.val <= min || node.val >= max) {
        return false
    }

    return isValidLeft(node.left, node.val, min) && isValidRight(node.right, node.val, max)
}
