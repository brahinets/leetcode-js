import {TreeNode} from "../../common/TreeNode"

export {maxPathSum}

function maxPathSum(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    const cache = new Map<TreeNode, number>()

    computeDownPath(root, cache)

    return collectMaxSum(root, cache)
}

function collectMaxSum(node: TreeNode | null, cache: Map<TreeNode, number>): number {
    if (node === null) {
        return -Infinity
    }

    const leftMax: number = collectMaxSum(node.left, cache)
    const rightMax: number = collectMaxSum(node.right, cache)
    const leftDown: number = node.left === null ? 0 : Math.max(0, cache.get(node.left)!)
    const rightDown: number = node.right === null ? 0 : Math.max(0, cache.get(node.right)!)

    const current: number = node.val + leftDown + rightDown

    return Math.max(current, leftMax, rightMax)
}

function computeDownPath(node: TreeNode | null, cache: Map<TreeNode, number>): number {
    if (node === null) {
        return 0
    }

    const leftPath: number = computeDownPath(node.left, cache)
    const rightPath: number = computeDownPath(node.right, cache)
    const bestChildPath: number = Math.max(0, leftPath, rightPath)
    const bestDownPath: number = node.val + bestChildPath

    cache.set(node, bestDownPath)

    return bestDownPath
}
