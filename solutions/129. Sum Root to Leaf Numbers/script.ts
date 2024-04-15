import {TreeNode} from '../../common/TreeNode'

export {sumNumbers, TreeNode}

function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    return collectPath(root, 0)
}

function collectPath(node: TreeNode, parentSum: number): number {
    const currentSum: number = parentSum * 10 + node.val

    if (!node.left && !node.right) {
        return currentSum
    }

    let totalSum: number = 0
    if (node.left) {
        totalSum += collectPath(node.left, currentSum)
    }

    if (node.right) {
        totalSum += collectPath(node.right, currentSum)
    }

    return totalSum
}
