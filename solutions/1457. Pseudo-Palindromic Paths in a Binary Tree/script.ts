import {TreeNode} from "../../common/TreeNode"

export {TreeNode, pseudoPalindromicPaths}

function pseudoPalindromicPaths(root: TreeNode): number {
    return countPseudoPalindromicPaths(root, new Set<number>())
}

function countPseudoPalindromicPaths(node: TreeNode | null, pathElementsWithoutPair: Set<number>): number {
    if (!node) {
        return 0
    }

    const currentPath: Set<number> = new Set<number>(pathElementsWithoutPair)
    if (!currentPath.has(node.val)) {
        currentPath.add(node.val)
    } else {
        currentPath.delete(node.val)
    }

    const leaveNode: boolean = !node.left && !node.right
    if (leaveNode) {
        return currentPath.size <= 1 ? 1 : 0
    }

    return countPseudoPalindromicPaths(node.left, currentPath) + countPseudoPalindromicPaths(node.right, currentPath)
}
