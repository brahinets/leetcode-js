import {TreeNode} from '../../common/TreeNode'

export {maxAncestorDiff, TreeNode}

function maxAncestorDiff(root: TreeNode): number {
    return dfs(root, root.val, root.val)
}

function dfs(node: TreeNode | null, minAncestor: number, maxAncestor: number): number {
    if (!node) {
        return maxAncestor - minAncestor
    }

    const min: number = Math.min(minAncestor, node.val)
    const max: number = Math.max(maxAncestor, node.val)

    const leftDiff: number = dfs(node.left, min, max)
    const rightDiff: number = dfs(node.right, min, max)

    return Math.max(leftDiff, rightDiff)
}
