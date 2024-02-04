import {TreeNode} from "../../common/TreeNode"

export {TreeNode, longestZigZag}

const maxDepth = (node: TreeNode | null, toLeft: boolean, depth: number): number => {
    if (!node) {
        return depth - 1
    }

    const keepGoing: number = toLeft ?
        maxDepth(node.left, false, depth + 1) :
        maxDepth(node.right, true, depth + 1)

    const startFromNode: number = toLeft ?
        maxDepth(node.right, true, 1) :
        maxDepth(node.left, false, 1)

    return Math.max(startFromNode, keepGoing)
}

function longestZigZag(root: TreeNode | null): number {
    return Math.max(maxDepth(root, true, 0), maxDepth(root, false, 0))
}
