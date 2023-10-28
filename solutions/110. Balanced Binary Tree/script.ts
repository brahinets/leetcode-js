import {TreeNode} from "../../common/TreeNode"

export {isBalanced, TreeNode}

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true
    }

    const left: number = depth(root.left)
    const right: number = depth(root.right)
    const diff: number = Math.abs(left - right)

    return (diff === 1 || diff === 0) && isBalanced(root.left) && isBalanced(root.right)
}

function depth(node: TreeNode | null): number {
    if (node === null) {
        return 0
    }

    const left: number = depth(node.left)
    const right: number = depth(node.right)
    return 1 + Math.max(left, right)
}
