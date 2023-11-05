import {TreeNode} from '../../common/TreeNode'

export {isValidBST, TreeNode}

function isValidBST(root: TreeNode): boolean {
    return isValid(root.left, Number.MIN_SAFE_INTEGER, root.val)
        && isValid(root.right, root.val, Number.MAX_SAFE_INTEGER)
}

function isValid(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) {
        return true
    }

    if (node.val <= min || node.val >= max) {
        return false
    }

    return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
}
