import {TreeNode} from "../../common/TreeNode"

export {diameterOfBinaryTree, TreeNode}

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    const diameterLeft: number = diameterOfBinaryTree(root.left)
    const diameterRight: number = diameterOfBinaryTree(root.right)

    return Math.max(
        2 + heightOfBinaryTree(root.left) + heightOfBinaryTree(root.right),
        diameterLeft,
        diameterRight
    )
}

function heightOfBinaryTree(node: TreeNode | null): number {
    if (node === null) {
        return -1
    }

    const heightLeft: number = heightOfBinaryTree(node.left)
    const heightRight: number = heightOfBinaryTree(node.right)

    return 1 + Math.max(heightLeft, heightRight)
}
