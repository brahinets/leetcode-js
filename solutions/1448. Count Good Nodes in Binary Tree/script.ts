import {TreeNode} from "../../common/TreeNode"

export {TreeNode, goodNodes}

function goodNodes(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    return countGoodNodes(root, root.val)
}

function countGoodNodes(node: TreeNode | null, limit: number): number {
    let good: number = 0

    if (node) {
        if (node.val >= limit) {
            good++
        }

        good += countGoodNodes(node.left, Math.max(node.val, limit))
        good += countGoodNodes(node.right, Math.max(node.val, limit))
    }

    return good
}
