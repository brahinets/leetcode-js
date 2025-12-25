import {TreeNode} from "../../common/TreeNode"

export {hasPathSum}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false
    }

    if (!root.left && !root.right) {
        return targetSum === root.val
    }

    const newTargetSum: number = targetSum - root.val

    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum)
}
